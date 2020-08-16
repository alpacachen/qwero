const OSS = require('ali-oss');
const oss = require('./oss')
const recursive = require('recursive-readdir')
const fs = require('fs')
let client = new OSS({
    region: oss.region,
    accessKeyId: oss.AccessKey,
    accessKeySecret: oss.SECRET,
    bucket: oss.bucket,
    timeout: 60000,
});
(async function() {
    console.log('开始同步OSS=============================')
    // 获取文件列表
    // [
    //     {
    //         name: 'app.1e2fd2bb.js',
    //         url: 'http://cx-test-index.oss-cn-beijing.aliyuncs.com/app.1e2fd2bb.js',
    //         lastModified: '2020-07-10T07:03:42.000Z',
    //         etag: '"C8AF474511E58C1161D3BB9D23A4EAA8"',
    //         type: 'Normal',
    //         size: 8235,
    //         storageClass: 'Standard',
    //         owner: [Object]
    //     },
    // ]
    let list = await getList();
    // 删除旧文件
    for (let i = 0; i < list.length; i++) {
        await client.delete(list[i].name)
        console.log('删除文件'+list[i].name);
    }
    // 上传新的
    recursive('dist',function (err,files) {
        files.forEach(filePath => {
            fs.readFile(filePath,async function (err, file) {
                let filename = filePath.replace('dist/','')
                await putObject(file, filename)
                console.log('上传文件'+ filename);
            })
        })
    })
})()

async function putObject (file,fileDir) {
    try {
        // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
        client.put(fileDir, file);
    } catch (e) {
        console.log(e);
    }
}
async function getList() {
    let res = await client.list()
    return res.objects;
}
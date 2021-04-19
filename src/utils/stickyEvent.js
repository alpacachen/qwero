import EventEmitter from 'eventemitter3'
export function watchSticky(element, container) {
    const ee = new EventEmitter()
    element.style.cssText += `position: -webkit-sticky;position: sticky;`;
    const stickyValueTop = window.getComputedStyle(element).getPropertyValue('top')
    const stickyValueBottom = window.getComputedStyle(element).getPropertyValue('bottom')
    const elementHeight = element.getBoundingClientRect().height
    const parentElement = element.parentElement;
    if(stickyValueTop !== 'auto') {
        // 在顶部增加元素
        const top = document.createElement('div');
        top.style.cssText = `position: relative;top: -${stickyValueTop};`
        top.classList.add('_sticky_top');
        parentElement.insertBefore(top, element);

        // 在底部增加元素
        const bottom = document.createElement('div');
        bottom.style.cssText = `position: relative;top: -${parseFloat(stickyValueTop) + elementHeight}px;`
        bottom.classList.add('_sticky_bottom');
        parentElement.appendChild(bottom)

        const topCb = ([info]) => {
            const rootInfo = info.rootBounds
            const targetInfo = info.boundingClientRect
            if (targetInfo.top < rootInfo.bottom && info.isIntersecting) {
                fire(element, false)
            }
            if (targetInfo.top <= rootInfo.top && !info.isIntersecting) {
                fire(element, true)
            }
        }
        const topOb = new IntersectionObserver(topCb, { root: container || parentElement, threshold: 0 })
        topOb.observe(top)

        const bottomCb = ([info]) => {
            const rootInfo = info.rootBounds
            const targetInfo = info.boundingClientRect
            if (targetInfo.top < rootInfo.bottom && info.isIntersecting) {
                fire(element, true)
            } else if (targetInfo.top <= rootInfo.top && !info.isIntersecting) {
                fire(element, false)
            }
        }
        const bottomOb = new IntersectionObserver(bottomCb, { root: container || parentElement, threshold: 0 })
        bottomOb.observe(bottom)
    }
    if(stickyValueBottom !== 'auto') {
        const bottom = document.createElement('div');
        bottom.style.cssText = `position: relative;top: ${parseFloat(stickyValueBottom) + elementHeight}px`
        bottom.classList.add('_sticky_bottom');
        parentElement.insertBefore(bottom, element);
        const b_bottomCb = ([info]) => {
            const rootInfo = info.rootBounds
            const targetInfo = info.boundingClientRect
            if(targetInfo.top < rootInfo.bottom && info.isIntersecting) {
                fire(element, false)
            } else if(targetInfo.top >= rootInfo.top && !info.isIntersecting){
                fire(element, true)
            }
        }
        const bottomOb = new IntersectionObserver(b_bottomCb, { root: container || parentElement, threshold: 0 })
        bottomOb.observe(bottom)

        // 在顶部增加元素
        const top = document.createElement('div');
        top.style.cssText = `position: relative;top: ${parseFloat(stickyValueBottom) + elementHeight}px`
        top.classList.add('_sticky_top');
        parentElement.prepend(top);

        // eslint-disable-next-line no-unused-vars
        const b_topCb = ([info]) => {
            const rootInfo = info.rootBounds
            const targetInfo = info.boundingClientRect
            if (targetInfo.top > rootInfo.top && info.isIntersecting) {
                fire(element, true)
            }
            if (targetInfo.top >= rootInfo.bottom && !info.isIntersecting) {
                fire(element, false)
            }
        }
        const topOb = new IntersectionObserver(b_topCb, { root: container || parentElement, threshold: 0 })
        topOb.observe(top)
    }
    function fire(target, status) {
        ee.emit('sticky-change', target, status)
    }
    return ee
}

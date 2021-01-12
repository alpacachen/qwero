
export function watchSticky(element, container) {
    element.style.cssText = `position: -webkit-sticky;position: sticky;`;
    const stickyValue = window.getComputedStyle(element).getPropertyValue('top')
    const elementHeight = element.getBoundingClientRect().height
    const parentElement = element.parentElement;

    // 在顶部增加元素
    const top = document.createElement('div');
    top.style.cssText = `position: relative;top: -${stickyValue};`
    top.classList.add('_sticky_top');
    parentElement.insertBefore(top, element);

    // 在底部增加元素
    const bottom = document.createElement('div');
    bottom.style.cssText = `position: relative;top: -${parseFloat(stickyValue) + elementHeight}px;`
    bottom.classList.add('_sticky_bottom');
    parentElement.appendChild(bottom)

    function topCb([info]) {
        const rootInfo = info.rootBounds
        const targetInfo = info.boundingClientRect
        if (targetInfo.top < rootInfo.bottom && info.isIntersecting) {
            fire(element, false)
        } else if (targetInfo.top <= rootInfo.top && !info.isIntersecting) {
            fire(element, true)
        }
    }
    const topOb = new IntersectionObserver(topCb, { root: container || parentElement, threshold: 0 })
    topOb.observe(top)

    function bottomCb([info]) {
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

function fire(target, status) {
    document.dispatchEvent(new CustomEvent('sticky-change', { detail: { target, status } }))
}
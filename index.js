const styles = ({ 
  height = 2, 
  color = 'currentColor', 
  speed = 200,
  ease = 'ease-in-out'
}) => {
  let s = document.createElement('style') 
  s.innerHTML = `
    .loader {
      position: fixed;
      width: 100%;
      left: 0; top: 0;
      height: 0;
      z-index: 1000;
    }
    .loader__inner {
      position: absolute;
      width: 100%;
      left: 0; top: 0;
      height: ${height}px;
      color: inherit;
      background-color: ${color};
      transition: transform ${speed}ms ${ease}; 
      -webkit-transition: -webkit-transform ${speed}ms ${ease}; 
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  `
  document.head.insertBefore(s, document.head.children[0])
}

const createBar = root => {
  let o = document.createElement('div')
  let i = document.createElement('div')

  o.className = `loader`
  i.className = `loader__inner`

  o.appendChild(i)

  root.insertBefore(o, root.children[0])

  return {
    outer: o,
    inner: i
  }
}

export default (root = document.body, opts = {}) => {
  let active = false  
  let progress = 0
  let timer = null

  const bar = createBar(root)

  styles(opts) 

  const render = (val = 0) => {
    progress = val
    bar.inner.style.cssText = `
      transform: translateY(${active ? '0' : '-100%'}) translateX(${-100 + progress}%); 
      -webkit-transform: translateY(${active ? '0' : '-100%'}) translateX(${-100 + progress})`
  }

  const go = val => {
    if (!active){ return }
    render(Math.min(val, opts.max || 95))
  }

  const inc = (val = (Math.random() * 10)) => go(progress + val)

  const end = () => {
    active = false
    render(100)
    setTimeout(() => render(), opts.speed || 200)
    if (timer){ clearTimeout(timer) }
  }

  const start = () => {
    active = true
    inc()
  }

  const putz = (interval = 500) => {
    if (!active){ return }
    timer = setInterval(() => inc(), interval)
  }
  
  return {
    putz,
    start,
    inc,
    go,
    end
  }
}

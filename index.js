const styles = (bar, outer, inner) => {
  let i = document.createElement('style') 
  let o = document.createElement('style') 
  document.body.insertBefore(i, bar)
  document.body.insertBefore(o, bar)

  return {
    outer: styles => styles ? o.innerHTML = `.${outer} {${styles}}` : o.innerHTML = '',
    inner: styles => styles ? i.innerHTML = `.${inner} {${styles}}` : i.innerHTML = '' 
  }
}

const createBar = (root, outer, inner) => {
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
  let timer = null
  const speed = opts.speed || 200
  const max = opts.max || 95 
  const outerClass = opts.outer || 'loader'
  const innerClass = opts.inner || 'loader__inner'
  const state = {
    active: false,
    progress: 0
  }

  const bar = createBar(root, outerClass, innerClass)

  const render = (val = 0) => {
    state.progress = val
    bar.inner.style.cssText = `
      transform: translateY(${state.active ? '0' : '-100%'}) translateX(${-100 + state.progress}%); 
      -webkit-transform: translateY(${state.active ? '0' : '-100%'}) translateX(${-100 + state.progress})`
  }

  const go = val => {
    if (!state.active){ return }
    render(Math.min(val, max))
  }

  const inc = (val = (Math.random() * 10)) => go(state.progress + val)

  const end = () => {
    state.active = false
    render(100)
    setTimeout(() => render(), speed)
    if (timer){ clearTimeout(timer) }
  }

  const start = () => {
    state.active = true
    inc()
  }

  const putz = (interval = 500) => {
    if (!state.active){ return }
    timer = setInterval(() => inc(), interval)
  }

  const setStyle = styles(bar.outer, outerClass, innerClass)
  
  return Object.create({
    putz,
    start,
    inc,
    go,
    end,
    setStyle,
    getState: () => state
  },{
    bar: {
      value: bar
    }
  })
}

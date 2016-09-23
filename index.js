const createBar = (root, classname) => {
  let o = document.createElement('div')
  let i = document.createElement('div')

  o.className = classname 
  i.className = `${classname}__inner`
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
  const classname = opts.classname || 'putz'
  const trickle = opts.trickle || 5 
  const state = {
    active: false,
    progress: 0
  }

  const bar = createBar(root, classname)

  const render = (val = 0) => {
    state.progress = val
    bar.inner.style.cssText = `
      transform: translateY(${state.active ? '0' : '-100%'}) translateX(${-100 + state.progress}%); 
      -webkit-transform: translateY(${state.active ? '0' : '-100%'}) translateX(${-100 + state.progress})`
  }

  const go = val => {
    if (!state.active){ return }
    render(Math.min(val, 95))
  }

  const inc = (val = (Math.random() * trickle)) => go(state.progress + val)

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
  
  return Object.create({
    putz,
    start,
    inc,
    go,
    end,
    getState: () => state
  },{
    bar: {
      value: bar
    }
  })
}

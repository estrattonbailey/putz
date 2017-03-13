let bar = null

export default (root = document.body, opts = {}) => {
  let timer = null

  const state = {
    active: false,
    progress: 0
  }

  const createBar = () => {
    const classname = opts.classname || 'putz'
    const outer = document.createElement('div')
    const inner = document.createElement('div')

    outer.className = classname
    inner.className = `${classname}__inner`
    outer.appendChild(inner)
    root.insertBefore(outer, root.children[0])

    return {
      outer,
      inner
    }
  }

  bar = bar || createBar()

  const render = (val = 0) => {
    state.progress = val
    bar.inner.style.cssText = `transform: translateY(${
      state.active ? '0' : '-100%'
    }) translateX(${
      -100 + state.progress
    }%);`
  }

  const go = val => {
    if (!state.active) { return }
    render(Math.min(val, 95))
  }

  const inc = (val = (Math.random() * opts.trickle || 5)) => go(state.progress + val)

  const end = () => {
    state.active = false
    render(100)
    setTimeout(() => render(), opts.speed || 200)
    if (timer) { clearTimeout(timer) }
  }

  const start = () => {
    state.active = true
    inc()
  }

  const putz = (interval = 500) => {
    if (!state.active) { return }
    timer = setInterval(() => inc(), interval)
  }

  const destroy = () => root.removeChild(bar.outer)

  return Object.create({
    putz,
    start,
    inc,
    go,
    end,
    destroy,
    getState: () => state
  }, {
    bar: {
      value: bar
    }
  })
}

import { useEffect, useState, useRef } from "react"

export default (ref, { threshold = 0.7, root = null, rootMargin = "0%" }) => {
  const [state, setState] = useState({
    currentView: undefined,
    inView: false,
    triggered: false,
    entry: undefined,
  })

  const ids = Array.isArray(ref)
    ? ref.map(r => (r.current ? r.current.id : r.current))
    : ref.current
      ? ref.current.id
      : ref.current

  const observer = useRef()

  useEffect(() => {
    const observeFn = (entries, observerInstance) => {
      if (Array.isArray(ref)) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentView = entry.target.id
            if (currentView !== state.currentView) {
              setState({
                currentView,
                inView: true,
                triggered: true,
                entry: observerInstance,
              })
            }
          }
        })
      } else {
        if (entries[0].intersectionRatio > 0) {
          setState({
            currentView: entries[0].target.id,
            inView: true,
            triggered: true,
            entry: observerInstance,
          })
          observerInstance.unobserve(ref.current)
        }
      }
      return
    }

    const options = {
      threshold,
      root,
      rootMargin,
    }

    observer.current = new IntersectionObserver(observeFn, options)

    if (!ids.every(value => value === null)) {
      if (Array.isArray(ref)) {
        ref.forEach(section => {
          observer.current.observe(section.current)
        })
      } else {
        if (ref.current && !state.triggered) {
          observer.current.observe(ref.current)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ids)])

  return [state.currentView, state.inView, state.entry]
}

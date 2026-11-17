
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    visible && (
      <button
        aria-label="Volver arriba"
        onClick={scrollToTop}
        className="scroll-top"
        type="button"
      >
        ↑
      </button>
    )
  )
}

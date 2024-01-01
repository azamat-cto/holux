import { createContext, useContext, useState } from 'react'

const ActiveSectionContext = createContext(null)

function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick
    }}>{children}</ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }

  return context
}

export default ActiveSectionContextProvider

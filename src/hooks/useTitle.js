import React, { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(()=>{
        document.title =`${title} / NorZah Cinema`;
    })
  return null
}



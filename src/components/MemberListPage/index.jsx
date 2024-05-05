import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MemberListPage() {
  const [Data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://6635f5f3415f4e1a5e25d6c5.mockapi.io/api/customers")
      console.log(response)
      return(response)
    }
    fetchData()
  }, [])

  return (
    <div>
      Daftar Pelanggan
      
    </div>
  )
}

export default MemberListPage

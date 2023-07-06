import React from 'react'
import * as C from  "./styles"

const ResumeItem = ({title, Icon, value}) => {
  return (
    <C.Container>
        <C.Header>
            <C.HeaderTitle>TEST</C.HeaderTitle>
            <Icon/>
        </C.Header>
        <C.Total>1000</C.Total>
    </C.Container>
  )
}

export default ResumeItem
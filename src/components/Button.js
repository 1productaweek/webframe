import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export default styled.button`
  outline: none;
  cursor: pointer;
  ${tw`
    inline-block
    bg-blue-500 
    hover:bg-blue-700 
    text-xs
    text-white 
    font-bold 
    py-3
    px-4 
    rounded
    border-0
    select-none
  `}
`

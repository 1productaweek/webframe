import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export default styled.input`
  border: 1px solid #888;
  ${tw`
    bg-white 
    focus:outline-none
    focus:shadow-outline 
    border border-gray-400 
    rounded
    py-2 
    px-4 
    block 
    w-full
    text-lg
    appearance-none 
    leading-normal
    shadow-none
  `}
`
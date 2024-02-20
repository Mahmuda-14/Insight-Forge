import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('should have Doc text', ()=>{
    render(<HomePage/>)

    const myElem = screen.getByTestId('Doc')
    
    expect(myElem).toBeInTheDocument()
})
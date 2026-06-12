import { useRef } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <InputGroup className="mb-3" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <Form.Control
        ref={inputRef}
        type="text"
        placeholder="Clicca il bottone per focalizzarmi"
      />
      <Button variant="primary" onClick={focusInput}>
        Focus
      </Button>
    </InputGroup>
  )
}

export default FocusableInput
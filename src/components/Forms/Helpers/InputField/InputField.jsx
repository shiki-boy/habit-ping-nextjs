import classNames from 'classnames'
import { at, capitalize } from 'lodash'
import { useFormContext } from 'react-hook-form'

const InputField = ( {
  children,
  name,
  field = null,
  className,
  required = true,
} ) => {
  const { formState } = useFormContext() || { formState: null }

  return (
    <div className={ classNames( 'textField', className ) }>
      {children}
      <label htmlFor={ name } className={ classNames( { required } ) }>
        {field ?? capitalize( name )}
      </label>

      <span className='helper-text error'>
        {at( formState?.errors, name )[0]?.message}
      </span>
    </div>
  )
}

export default InputField

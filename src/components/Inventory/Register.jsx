import '../../styles/css/components/register.css'
import { isNotEmpty } from '../../utils/validator'

export const Register = ({
  handleSubmit,
  product,
  setProduct,
  total,
  setTotal
}) => {
  return (
    <>
      <h3 className='title'>Create a new product</h3>
      <form className='form-register' onSubmit={handleSubmit}>
        <div>
          <input type='texr' placeholder='Product*' value={product} onChange={({ target }) => setProduct(target.value)} />
          {!isNotEmpty(product) && <span className='errorInput'>This field don't be empty</span>}
        </div>
        <div>
          <input type='number' placeholder='Total*' value={total} onChange={({ target }) => setTotal(target.value)} />
          {!isNotEmpty(total) && <span className='errorInput'>This field don't be empty</span>}
        </div>
      </form>
    </>
  )
}

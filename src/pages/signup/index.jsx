import AuthLayout from '@/layouts/AuthLayout'

const Signup = () => (
  <div>signup</div>
)

Signup.getLayout = function getLayout( page ){
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default Signup
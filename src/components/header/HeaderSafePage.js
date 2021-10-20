import { PageHeader } from 'antd';
import './HeaderSingle.scss'

function HeaderSafePage() {
  return (
    <>
      <PageHeader
        className="header-single"
        onBack={() => null}
        title="Edit Safe"
      />
    </>
  )
}

export default HeaderSafePage

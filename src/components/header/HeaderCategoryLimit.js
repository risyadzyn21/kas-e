import { PageHeader } from 'antd';
import './HeaderSingle.scss'

function HeaderCategoryLimit() {
  return (
    <>
      <PageHeader
        className="header-single"
        onBack={() => null}
        title="Edit Category Limit"
      />
    </>
  )
}

export default HeaderCategoryLimit

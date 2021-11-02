import React, { useRef } from "react";
import { PageHeader, Button } from 'antd';
import './HeaderSingle.scss'
import { useReactToPrint } from 'react-to-print';
import ReportDetailMonth from '../print/ReportDetailMonth'
import PrintPage from '../print/PrintPage'

function HeaderReportDetail() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <>
      <PageHeader
        className="header-single"
        onBack={() => null}
        title="Report Detail">
        <div style={{ display: "none" }}>
          <PrintPage ref={componentRef} />
        </div>
        <Button className='btn-print' onClick={handlePrint}>
          Print
        </Button>
      </PageHeader>
    </>
  )
}

export default HeaderReportDetail

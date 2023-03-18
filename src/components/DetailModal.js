import { Modal,Image } from 'antd'
import React from 'react'

function DetailModal({img,data,isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal className='container' okText="View More" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='m-2 d-flex align-content-center justify-content-center'>
        <Image className="img-thumbnail justify-content-center" src={img} width={300} />
            </div>
            <p>{data}</p>

    </Modal>
  )
}

export default DetailModal
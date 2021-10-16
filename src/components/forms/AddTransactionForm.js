import React, { useState } from 'react';
import { Form, Select } from 'antd'
import FunAndRelax from '../../assets/icons/FunAndRelax.png'
import './AddTransactionForm.scss'



function AddTransactionForm() {
  return (
    <>
      <Form>
        <Form.Item label="Select">
          <Select className='select-container'>
            <Select.Option value="demo1">Demo1</Select.Option>
            <Select.Option value="funnrelax" ><img src={FunAndRelax} /> Fun and Relax
              <p>This category is for your expenses related to entertainment, vacation, leisure, snack or hangout with friends and shop</p>
              <p>Limit : Rp. 200.000</p>
            </Select.Option>
            <Select.Option value="billnpayment" ><img src={FunAndRelax} /> Bill and Payment
              <p>This category is for things like rent bills, insurance, payments for electricity, water, gas and other arrears</p>
              <p>Limit : Rp. 500.000</p>
            </Select.Option>
            <Select.Option value="dailyneeds" ><img src={FunAndRelax} /> Daily needs
              <p>This category is for your daily needs, such as toiletries, household and others</p>
              <p>Limit : Rp. 300.000</p>
            </Select.Option>
            <Select.Option value="urgentneed" ><img src={FunAndRelax} /> Urgent need
              <p>This category is intended for funds in case of an emergency</p>
              <p>Limit : Rp. 500.000</p>
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>

    </>
  )
}

export default AddTransactionForm

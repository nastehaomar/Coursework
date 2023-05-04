import {Page,Link,BackLink,Button,Select,Footer,ButtonArrow} from 'govuk-react';
const Cancel = () =>{
return(
<Page beforeChildren={<BackLink href="#">Back</BackLink>}>
    <h1>Cancel Appointments</h1>

    <Select
  input={{
    name: 'group1',
    onChange: function noRefCheck(){}
  }}
  label="Select Appointment:"
>
  <option value="0">
    GOV.UK elements option 1
  </option>
  <option value="1">
    
  </option>
  <option value="2">
    
  </option>
  <option value="3">
    
  </option>
  <option value="4">
    
  </option>
  <option value="5">
    
  </option>
  <option value="6">
    
  </option>

</Select>


<div className='button'>
<Button
  icon={<ButtonArrow />}
  start
>
  Cancel
</Button>
</div>

<div className="footer">
    <Footer />
</div>


</Page>

);
}

export default Cancel;

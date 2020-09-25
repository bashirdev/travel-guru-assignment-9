import React, {  useState } from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
     
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const BookingFrom = ({handleStartBooking}) => {
  const classes = useStyles();

const [formData, setFormData] =useState({
  data:false,
  from:'',
  destination:'',
  date:''

})
const handleOnblur=(e)=>{
  
  setFormData(e.target.value);
}

const handleBooking=()=>{
    const newData={
      data:true,
      from:'from',
      destination:'destination',
      date:'date'
    }
    setFormData(newData)
}

    return (
        <div>

<Form  onSubmit={handleBooking}  className={classes.container} >
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Origin</Form.Label>
      <Form.Control type="txt" placeholder="Dhaka" onBlur={handleOnblur}  name="from"  required/>
    </Form.Group>
 </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Destination</Form.Label>
      <Form.Control type="txt" placeholder="Cox's Bazar" onBlur={handleOnblur} name='destination'  required />
    </Form.Group>
</Form.Row>
<Form.Row>
<TextField
        name="date"
        label="from"
        type="date"
        onBlur={handleOnblur} 
        defaultValue="2020-09-20"
        required
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          
        }}
      />
      <TextField
        name="date"
        label="to"
        onBlur={handleOnblur} 
        type="date"
        defaultValue="2020-10-20"
        required
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
         
        }}
      />
</Form.Row>

<Button variant="primary" type="submit" value="submit" style={{marginTop:'10px'}} onClick={()=>handleStartBooking()} >
 Start booking
  </Button>

</Form>

        </div>
    );
};

export default BookingFrom;




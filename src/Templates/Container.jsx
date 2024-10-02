import './Container.css';
import styled from 'styled-components';

/*const Container=(props)=>{
  const classes="container " + props.className
  return(
    <div className={classes} >
     {props.children}
    </div>
  );
}
export default ; */
const Container = styled.div `.container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-contant:center;
  width:100%;
  height:100%;
  background-color:rgb(5,6,45);
}`;
export default Container;
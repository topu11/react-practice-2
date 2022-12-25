export default function FunctionalComponentWithParametre(props)
{
     
   
    return (
        <div> 
        <div>first Name {props.others.firstName}</div>
        <div>last Name {props.others.lastName}</div>
        <div>email {props.email}</div>
        </div>
    )

}
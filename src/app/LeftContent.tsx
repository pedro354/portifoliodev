import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

export default function LeftContent(){
    return (
<div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Open
  </Button>
  <Offcanvas
    scrollable
    toggle={function noRefCheck(){}}
  >
    <OffcanvasHeader toggle={function noRefCheck(){}}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div>    )
}
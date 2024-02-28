import React from "react";
import "./Bank.css";

function Bank() {
  return (
    <>
      <div className="section-width">
        <div className="section-padding">
          <h3 className="color">
            <center>Bank Details</center>
          </h3>

          {/* <div className="parentbankdiv">
            <div className="form-container">
              <form>
                <label for="fname">Account Title</label> <br />
                <input type="text" id="fname" placeholder="Acc Title" /> <br />
                <label for="lname">Account No.</label> <br />
                <input type="text" id="lname" placeholder="Acc No." /> <br />
                <label for="country">Bank Name</label> <br />
                <input
                  type="text"
                  id="bname"
                  placeholder="e.g Meezan Bank"
                />{" "}
                <br />
                <label for="country">Branch Code</label> <br />
                <input type="text" id="brname" placeholder="e.g 2563" /> <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div> */}
<br/>
          <table>
            <tr>
              <th>Bank</th>
              <th>Acc Title</th>
              <th>Acc No.</th>
            </tr>
            <tr>
              <td>Bank Alfalah Limited</td>
              <td>IT Air Travel</td>
              <td>0007-1003232596</td>
            </tr>
            <tr>
              <td>MCB</td>
              <td>IT Air Travels</td>
              <td>0409-2402-5100-1806</td>
            </tr>
            <tr>
              <td>Summit Bank</td>
              <td>IT Air Travels & Tours PVT.LTD</td>
              <td>1-4-16-20311-714-115600</td>
            </tr>
            <tr>
              <td>Meezan Bank</td>
              <td>IT Air Travel & Tour</td>
              <td>0827-0105427375</td>
            </tr>
            <tr>
              <td>Faisal Bank</td>
              <td>IT Air Travels & Tours</td>
              <td>0120007000010147</td>
            </tr>
            <tr>
              <td>Habib Bank Limited</td>
              <td>Global Link Air Travels</td>
              <td>08147915491103</td>
            </tr>
            <tr>
              <td>UBL</td>
              <td>Global Link Air Travels</td>
              <td>1491-226137254</td>
            </tr>
            <tr>
              <td>JS Bank</td>
              <td>IT Air Travels and Tours</td>
              <td>2279585</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bank;

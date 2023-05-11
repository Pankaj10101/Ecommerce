import React from "react";
import Banner from "./Banner";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Banner />

      <section className="m-auto" style={{width:'70vw'}}>
        <h1 className="text-center mt-5 mb-4" >TOURS</h1>
        <div>
          <Table>
            <tbody>
              <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td className="d-flex justify-content-center " ><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td className="d-flex justify-content-center " ><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td className="d-flex justify-content-center " ><Button>BUY TICKETS</Button></td>
              </tr>
              <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td className="d-flex justify-content-center " ><Button>BUY TICKETS</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default Home;

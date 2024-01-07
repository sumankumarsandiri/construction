import React from "react";
import "../pages/ProjectAll.css";
function ProjectAll() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th> Name</th>
          <th>Location</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Event Name">KARUNA</td>
          <td data-label="Event Date"> CHILPUR</td>
          <td data-label="Total Seats">20</td>
          <td data-label="Seats Available">12</td>
          <td data-label="Booking Status">
            <a href="/" class="btn btn__active">
              Book Now
            </a>
          </td>
        </tr>
        <tr>
          <td data-label="Event Name">Music</td>
          <td data-label="Event Date">29/12/2021</td>
          <td data-label="Total Seats">15</td>
          <td data-label="Seats Available">5</td>
          <td data-label="Booking Status">
            <a href="/" class="btn btn__active">
              Book Now
            </a>
          </td>
        </tr>
        <tr>
          <td data-label="Event Name">Craft</td>
          <td data-label="Event Date">19/12/2021</td>
          <td data-label="Total Seats">30</td>
          <td data-label="Seats Available">19</td>
          <td data-label="Booking Status">
            <a href="/" class="btn btn__active">
              Book Now
            </a>
          </td>
        </tr>
        <tr>
          <td data-label="Event Name">Go Kart</td>
          <td data-label="Event Date">10/12/2021</td>
          <td data-label="Total Seats">5</td>
          <td data-label="Seats Available">0</td>
          <td data-label="Booking Status">
            <a href="/" class="btn btn__pledged">
              closed
            </a>
          </td>
        </tr>
        <tr>
          <td data-label="Event Name">Designing</td>
          <td data-label="Event Date">1/12/2021</td>
          <td data-label="Total Seats">10</td>
          <td data-label="Seats Available">0</td>
          <td data-label="Booking Status">
            <a href="/" class="btn btn__pledged">
              closed
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default ProjectAll;

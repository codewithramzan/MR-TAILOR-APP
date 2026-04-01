import { header, darktheme, menuBtn } from "./script.js";

function measureHTML() {
    let measureHTML = `
        <h2 id="h2">Tailoring Suit Measurement Form</h2>

        <form>

            <div class="row">
                <div class="form-group">
                    <label>Customer Name</label>
                    <input type="text" placeholder="Enter Name" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter Phone Number" required>
                </div>
            </div>

            <div class="form-group">
                <label>Suit Type</label>
                <select>
                    <option>Shalwar Kameez</option>
                    <option>Waistcoat</option>
                    <option>Coat Pant</option>
                    <option>Prince Coat</option>
                </select>
            </div>

            <h3>Body Measurements (in inches)</h3>

            <div class="row">
                <div class="form-group">
                    <label>Chest</label>
                    <input type="number" placeholder="Chest Size">
                </div>

                <div class="form-group">
                    <label>Waist</label>
                    <input type="number" placeholder="Waist Size">
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label>Shoulder</label>
                    <input type="number" placeholder="Shoulder Size">
                </div>

                <div class="form-group">
                    <label>Sleeve Length</label>
                    <input type="number" placeholder="Sleeve Length">
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label>Shirt Length</label>
                    <input type="number" placeholder="Shirt Length">
                </div>

                <div class="form-group">
                    <label>Neck</label>
                    <input type="number" placeholder="Neck Size">
                </div>
            </div>

            <h3>Additional Options</h3>

            <div class="form-group">
                <label>Collar Type</label>
                <select>
                    <option>Simple Collar</option>
                    <option>Ban Collar</option>
                    <option>Round Collar</option>
                </select>
            </div>

            <div class="form-group">
                <label>Delivery Date</label>
                <input type="date">
            </div>

            <div class="form-group">
                <label>Special Instructions</label>
                <textarea rows="4" placeholder="Write any special instructions..."></textarea>
            </div>

            <button type="submit">Submit Measurements</button>

        </form>
        `;
    document.querySelector('.js-container').innerHTML= measureHTML;
}
header();
menuBtn();
measureHTML();
darktheme();
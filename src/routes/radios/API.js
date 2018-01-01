const API_BASE = "https://takeoff.dabbot.org/api/radio"

export const RadioState = {
  Valid: 0,
  Escrow: 1,
  Broken: 2,
};

export class API {
  getItems(state) {
    return fetch(`${API_BASE}/pages?state=${state}`);
  }

  getRadios(state, page, pageSize) {
    return fetch(`${API_BASE}/radios?state=${state}&start=${(page-1)*pageSize}&limit=${pageSize}`)
  }
}

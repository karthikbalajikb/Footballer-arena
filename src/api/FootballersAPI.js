import axios from "axios";

const BASEURL = "http://localhost:4000";
export default {
  fetchAllFootballersService: () =>
    axios
      .get(`${BASEURL}/api/getFootballersList`)
      .then(resp => mapResponse(resp.data)),

  fetchFootballerProfileService: (id) =>
    axios
      .post(`${BASEURL}/api/getFootballerDetails`, {userId: id})
      .then(resp => mapProfileResponse(resp.data))
};

const mapResponse = data => {
  console.log(data)
  return data.map(player => {
    return {
      Name: player.Name.replace(/[^\x00-\x7F]/g, ""),
      Nationality: player.Nationality,
      Club: player.Club,
      Preffered_Position: player.Preffered_Position,
      _id: player._id
    };
  });
};

const mapProfileResponse = player => {
  console.log(player)
    return {
      Name: player.Name.replace(/[^\x00-\x7F]/g, ""),
      Nationality: player.Nationality,
      Club: player.Club,
      Preffered_Position: player.Preffered_Position,
      _id: player._id,
      Age: player.Age,
      Ball_Control: player.Ball_Control,
      Birth_Date: player.Birth_Date,
      Club_Joining: player.Club_Joining,
      Club_Kit: player.Club_Kit,
      Club_Position: player.Club_Position,
      Contract_Expiry: player.Contract_Expiry,
      Height: player.Height,
      National_Kit: player.National_Kit,
      National_Position: player.National_Position,
      Preffered_Foot: player.Preffered_Foot,
      Rating: player.Rating,
      Skill_Moves: player.Skill_Moves,
      Weak_foot: player.Weak_foot,
      Weight: player.Weight,
      Work_Rate: player.Work_Rate,
    };
};

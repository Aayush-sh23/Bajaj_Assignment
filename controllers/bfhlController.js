const bfhlService = require("../services/bfhlService");

exports.processData = (req, res) => {
  try {
    const { data, full_name, dob, email, roll_number } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input format. 'data' should be an array."
      });
    }

    if (!full_name || !dob || !email || !roll_number) {
      return res.status(400).json({
        is_success: false,
        message: "Missing required user fields (full_name, dob, email, roll_number)"
      });
    }

    const result = bfhlService.processInput(data);

    const user_id = `${full_name.toLowerCase().replace(/\s+/g, "_")}_${dob}`;

    res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      ...result
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
};
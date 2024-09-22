export const GetDataFromArduino = (req, res) => {
    const { humidity } = req.body;
    console.log(humidity);
    return res.status(200).send();
};

export const SendDataToArduino = (req, res) => {
    res.status(200).json({ message: 'GET request data', });
};

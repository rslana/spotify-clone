// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      name: "This Is Pink Floyd",
      description:
        "Is there anybody out there? Listen to the best of Pink Floyd from their early years to The Endless River.",
    },
  ]);
};

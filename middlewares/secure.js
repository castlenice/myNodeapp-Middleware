export const secure = (req, res, next) => {
    const token = req.query.token;
    console.log(req.query)
    if (token) {
      next();
    } else {
      res.status(403).send('Gib einen verdammten Token an!')
    }
  }
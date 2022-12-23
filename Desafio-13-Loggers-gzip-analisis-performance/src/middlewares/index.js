import logger from "../config/loggers.js"

export const logInfo = (req, res, next) => {
    logger.info(`Peticion a ruta -> url: ${req.url} | method: ${req.method}`)
    next()
}
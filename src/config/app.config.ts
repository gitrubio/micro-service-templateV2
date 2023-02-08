import 'dotenv/config'

export const configApp = {
    db : {
        HOST :  process.env.HOST || 'localhost',
        PORT : Number(process.env.PORT_DB) || 3306,
        DATABASE :  process.env.DATABASE || 'andromeda',
        USER :  process.env.USER ||'root',
        PASSWORD :  process.env.PASS || 'admin'
    },
    server : {
        PORT : process.env.PORT || '3000',
        VERSION : '1.0.0'
    },
    jwt : {
        secret : process.env.SECRET_KEY || 'DEFAULT_KEY_SECRET_SERVER'
    }
}
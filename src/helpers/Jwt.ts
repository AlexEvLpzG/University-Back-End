const jwt = require( 'jsonwebtoken' );

class Jwt {
    public static generateJWT( id: any, name: string, role: any ) {
        return new Promise( ( resolve, reject ) => {
            const payload = { id, name, role };

            jwt.sign( payload, process.env.SECRET_JWT_SEED, {
                expiresIn: '2h',
            }, ( error: any, token: string ) => {
                if( error ) {
                    console.log( error );
                    reject( 'No se pudo generar el token' );
                }

                resolve( token );
            });
        });
    }
}

export default Jwt;

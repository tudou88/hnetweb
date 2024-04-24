/**
 * Just replace BAREUR
 */ 
const BAREURL = 'https://hideip.ivwv.site'

/**
 * Non-developers, please modify without authorization, 98% report errors!
*/
self.__uv$config = {
    
    prefix: `/ivwv/`,
    
    //prefix: `/server/`,
    bare: `${BAREURL}/bareServer/`,
    //bare: `${BAREURL}`,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    //encodeUrl: ,
    //decodeUrl: ,
    handler: '/server/server.handler.js',
    client: '/server/server.client.js',
    bundle: '/server/server.bundle.js',
    config: '/server/server.config.js',
    sw: '/server/server.sw.js',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint : {
        ignoreDuringBuilds: true,
    },
    images : {
        remotePatterns : [{
            protocol: "https",
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/44w6vr2nfirj/**'
        }]
    }
}

module.exports = nextConfig

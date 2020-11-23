<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'CerrarSesion',
    created() {
        this.setCookie('username', null, 360);
        this.setCookie('password', null, 360);
        window.location.href = '/';
    },
    methods: {
        setCookie(cname, cvalue, exdays) {
            let d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            let expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        },
        getCookie(cname) {
            let name = cname + '=';
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }
    }
}
</script>

<style scoped>
</style>

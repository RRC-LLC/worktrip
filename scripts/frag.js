const frag = [`
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec3 v_normal;
varying vec2 v_texcoord;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    vec4 color1 = vec4(1.0, 1.0, 1.0, 1.0);
    vec4 color2 = vec4(0.0, 0.0, 0.0, 1.0);
    
    float f = random(uv + u_time * 0.01);
    
    vec4 color = mix(color1, color2, f);
    
    
    gl_FragColor = color;
}
`]
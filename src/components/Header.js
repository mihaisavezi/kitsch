import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width, height, ...props }) =>
  <div {...props} style={{ width, height }}>
    <svg
      className="fill-kitsch-brown"
      version="1.1"
      id="Layer_2"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="45.728 343.142 277.667 154.817"
      enableBackground="new 45.728 343.142 277.667 154.817"
    >
      <g>
        <path d="M74.23,486.995c-0.662-7.602-0.922-15.062-8.428-19.764c8.073-4.957,7.521-12.844,8.574-20.361
                    c12.657,0,24.68,0,36.703,0c-8.908-6.307-9.691-14.855-8.6-23.77c2.581-2.799,5.975,0.014,8.436-2.252
		c0.582-3.682-1.637-6.83-1.979-10.6c-4.455,0.691-8.59,0.951-12.733,0.348c-12.114-1.764-19.785-11.553-19.573-25.01
		c0.184-11.629,8.195-19.994,20.275-21.303c10.111-1.096,19.938,0.234,29.588,3.236c1.559,0.484,3.317,0.723,4.19,2.855
		c-0.091,4.109-3.018,4.777-6.463,4.533c-7.492-0.533-14.989-0.633-22.474-0.117c-4.953,0.342-9.353,2.236-10.7,7.479
		c-1.267,4.932-1.505,10.189,2.892,13.908c4.092,3.459,8.98,4.211,14.066,2.148c4.227-1.713,7.678-4.623,11.162-7.477
		c14.457-11.834,31.176-16.125,49.488-14.125c14.005,1.531,26.631,7.193,38.377,14.752c5.291,3.404,10.494,3.561,15.941,1.297
		c1.414-2.457,0.961-4.73,0.4-7.023c-1.386-5.66-2.967-11.283-4.082-16.998c-2.363-12.119,2.726-20.375,14.557-24.141
		c2.878-0.916,5.812-1.365,8.834-1.457c8.676-0.26,16.189,3.381,23.728,6.951c8.954,4.238,9.205,5.252,3.271,12.734
		c-0.621,0.781-1.233,1.57-1.874,2.336c-3.304,3.957-7.099,6.021-12.218,3.25c-0.537-0.291-1.267-0.227-1.703-0.295
		c-1.636,0.82-2.666,1.836-3.09,3.857c4.154,8.826,8.556,17.951,9.576,28.391c6.887,0,13.367,0.043,19.848-0.021
		c2.366-0.023,4.704,0.127,6.866,1.041c3.205,1.355,4.461,5.322,2.588,8.436c-1.867,3.104-4.459,4.086-7.664,2.104
		c-0.045-1.947,2.291-2.438,1.779-4.244c-0.346-1.367-1.502-2.154-2.605-1.775c-8.196,2.814-13.631,9.854-20.916,13.871
		c-1.557,0.578-2.995-1.012-4.804,0.291c-2.662,5.803-7.602,9.867-13.39,12.564c-0.421,7.67,1.396,10.922,5.938,9.93
		c4.788-1.047,7.641,0.715,9.864,4.766c15.577,0,31.034,0,46.84,0c1.041,7.408,0.668,15.174,8.711,19.758
		c-8.148,4.781-7.668,12.432-8.645,19.896C227.627,486.995,151.094,486.995,74.23,486.995z M152.592,435.415
		c-0.248,4.004,1.372,5.324,4.135,4.826c5.139-0.93,8.09,0.846,8.506,6.555c24.212,0,48.254,0,73.079,0
		c-4.681-4.072-8.962-7.797-13.376-11.641c-8.684-0.635-17.555-0.775-25.962-3.775c-8.138-2.9-16.218-5.967-25.12-9.254
		C171.705,434.493,162.093,435.215,152.592,435.415z M253.733,419.719c7.129-13.971,5.302-27.688-1.519-41.188
		c-0.9-1.783-1.742-3.598-2.58-5.41c-0.206-0.445-0.287-0.947-0.451-1.508c0.957-3.439,3.071-6.178,6.752-4.533
		c5.465,2.441,8.484-0.318,11.491-3.953c1.147-1.385,2.194-2.854,3.554-4.631c-2.125-0.992-3.7-0.834-4.949,0.822
		c-2.681,3.553-6.205,3.598-9.883,2.264c-5.323-1.93-10.07-0.666-14.828,1.877c-3.767,2.014-4.841,4.752-3.346,8.676
		c2.076,5.447,3.969,10.969,6.184,16.357c4.576,11.133,3.472,21.791-2.182,32.207c-1.555,2.863-3.635,5.779-0.387,9.629
		C247.594,428.708,251.188,424.708,253.733,419.719z M155.146,413.42c11.187,3.285,21.981,7.672,32.759,12.061
		c10.1,4.111,20.415,7.1,31.374,7.453c1.603,0.051,3.277,0.578,5.178-0.521c-1.773-2.533-0.96-5.6-1.325-7.838
		c-1.254-1.348-2.229-1.539-3.247-1.396c-13.646,1.926-25.942-2.842-38.067-7.963c-9.906-4.182-19.914-7.521-30.818-7.223
		c-2.078,0.059-4.449-0.309-5.361,3.068C148.852,411.854,152.037,412.506,155.146,413.42z M124.688,446.915
		c9.059,0,17.437,0,26.662,0c-4.869-4.629-9.218-8.762-14.119-13.422c4.529-1.346,9.146-1.672,10.415-6.463
		c0.942-3.561-0.118-6.838-2.642-10.525c-5.972,11.713-17.686,13.312-29.275,17.295
		C117.732,439.475,126.811,439.377,124.688,446.915z M271.975,472.622c0.914,0.973,1.893,0.611,3.099,0.545
		c-0.075-1.477-0.146-2.863-0.215-4.248c1.827-1.244,3.56-0.826,5.187-0.438c1.301,1.426-0.047,2.959,0.436,4.312
		c0.938,0.691,1.856,0.65,2.952,0.023c-0.42-3.498-0.871-7.08-0.061-10.65c-0.768-0.92-1.709-0.832-2.793-0.449
		c-1.151,1.258,1.028,2.82-0.686,4.422c-1.256,0.711-2.986,0.514-4.674-0.127c-1.091-1.383,0.25-2.922-0.279-4.434
		c-0.96,0-1.747,0-3.069,0C272.692,465.581,272.791,469.151,271.975,472.622z M169.145,467.999c-1.105-2.002-0.216-4.01-0.093-5.959
		c-0.632-0.768-1.427-0.701-2.54-0.381c0.242,3.707,0.486,7.465,0.804,12.35c2.89-3.064,5.059-5.367,7.395-7.844
		c1.526,2.512,0.429,4.699,0.161,7.014c0.982,0,1.764,0,2.938,0c-0.503-3.85-1.899-7.641,0.593-12.025
		C173.269,461.915,172.502,466.237,169.145,467.999z M258.938,473.665c3.768,0.07,6.309-2.033,6.391-6.043
		c0.079-3.891-2.023-6.359-5.941-6.455c-3.842-0.094-6.062,2.139-6.521,6.076C253.144,471.004,255.046,473.59,258.938,473.665z
		 M154.664,464.887c-2.398-0.145-1.826-5.186-5.637-2.971c1.338,1.564,2.659,3.109,3.975,4.646
		c-0.376,2.709-2.512,4.207-3.883,6.174c1.007,1.102,2.193,0.457,3.262,0.559c1.762-0.475,0.516-3.012,2.92-3.484
		c1.694,0.213,0.996,5.4,4.932,2.941c-1.297-1.76-3.395-2.934-4.15-5.291c0.696-2.01,2.268-3.654,3.785-5.355
		C156.129,459.92,155.92,463.299,154.664,464.887z M212.671,468.583c0.595,0.953,0.712,2.018,0.027,2.867
		c-1.812,1.438-3.186-0.658-5.155-0.158c2.333,3.885,5.646,1.299,8.665,2.059c-0.761-4.076-0.864-7.787-0.249-11.936
		c-2.575,0.346-5.121-0.92-7.35,1.139c1.461,2.098,2.729-0.555,4.757,1.889c1.834,2.627-3.396,1.01-3.888,2.607
		C210.24,469.583,211.749,467.696,212.671,468.583z M238.35,461.692c-1.044-0.096-1.676-0.152-2.741-0.248
		c0.46,3.857-0.11,7.623,2.027,10.975c2.327,1.627,4.62,1.586,6.771,0.223c1.605-1.564,1.681-3.402,1.688-5.236
		c0.009-1.797-0.089-3.596,0.674-5.287c-1.026-1.061-2.114-0.723-3.419-0.367c0.422,2.725,0.704,5.459,0.229,8.152
		c-1.352,2.154-2.943,2.604-5.074,0.84C237.267,467.901,237.467,464.85,238.35,461.692z M129.184,465.76
		c0.049,1.912-4.201-1.281-3.296,2.355c0.61,1.637,1.99-0.633,2.847,0.281c1.154,1.195,0.704,2.299,0.245,3.004
		c-2.026,1.408-3.409-0.566-5.522-0.115c2.795,3.623,5.932,1.479,8.991,1.949c-1.052-4.02-0.763-7.705-0.419-11.809
		c-2.521,0.422-5.165-1.281-7.598,1.936C126.705,463.793,129.467,461.315,129.184,465.76z M194.432,472.776
		c-1.57-3.654-3.156-7.344-4.969-11.559c-3.224,3.617-3.053,8.252-5.712,11.375c1.02,1.143,2.023,0.715,3.058,0.641
		c1.565-0.814-0.087-2.934,0.191-3.08c3.225-1.857,4.191-0.9,4.963,2.979C192.768,473.344,193.566,473.5,194.432,472.776z
		 M115.932,473.561c-1.27-3.605-1.064-6.803-0.826-9.748c1.238-1.844,2.85,0.529,4.053-0.686c-1.728-2.213-7.896-2.486-11.153-0.512
		c0.972,2.564,3.12-1.021,4.582,2.098c0.278,1.889,0.511,5.068-0.813,8.145C113.057,473.934,114.35,473.036,115.932,473.561z
		 M97.322,465.247c-2.871,0.549-1.173-5.42-5.298-3.324c1.993,3.301,6.019,6.051,3.302,10.582c1.151,1.184,2.278,0.82,3.812,0.516
		c-1.799-4.414,0.443-7.76,3.498-11.078C98.257,460.188,98.729,463.928,97.322,465.247z M230.37,471.006
		c-2.334-0.684-3.43,2.246-5.346,0.094c-0.736-3.342,7.782-4.752,2.646-9.266c-1.609-1.414-3.546-1.004-5.12,0.688
		c1.343,2.133,2.95-0.779,4.279,1.307c0.462,3.146-6.626,3.574-3.116,8.855C225.902,474.239,228.073,474.262,230.37,471.006z
		 M234.617,350.086c-3.604,0.18-5.893,2.127-6.17,5.527c-0.248,3.051,1.42,5.213,4.88,5.176c1.397-2.309-1.142-4.012-0.315-5.92
		C233.05,353.168,235.541,352.487,234.617,350.086z M253.72,356.969c2.375,0.02,3.716-1.426,3.587-3.775
		c-0.116-2.104-1.45-3.328-3.615-3.246c-2.166,0.084-3.206,1.441-3.437,3.566C250.543,355.493,251.571,356.954,253.72,356.969z
		 M139.297,461.991c0.774,3.629,1.07,7.32-0.127,10.785c1.449,1.029,2.518,0.348,3.801,0.414c-1.195-3.939-1.077-7.627-0.189-11.299
		C141.553,461.452,140.473,461.106,139.297,461.991z" />
        <path d="M261.026,463.077c-5.595,0.266-6.938,3.107-4.021,8.494c2.369,1.121,4.165,0.283,5.232-1.934
                    C263.395,467.235,263.361,464.881,261.026,463.077z" />
        <rect x="89.395" y="454.667" width="207" height="24.332" />
        <path d="M286.19,384.815c-0.199-0.246-0.623-0.447-0.938-0.447h-11.131c-0.317,0-0.74,0.201-0.94,0.447
                    l-2.159,2.666c-0.199,0.244-0.363,0.703-0.363,1.02v3.277c0,0.316,0.164,0.773,0.363,1.02l2.159,2.666c0.2,0.246,0.2,0.646,0,0.893
		l-2.159,2.666c-0.199,0.246-0.363,0.703-0.363,1.02v25.725c0,0.318,0.104,0.812,0.232,1.105l2.126,2.125
		c0.294,0.129,0.787,0.236,1.104,0.236h11.131c0.314,0,0.811-0.107,1.104-0.236l2.123-2.125c0.129-0.293,0.236-0.787,0.236-1.105
		v-25.688c0-0.316-0.164-0.773-0.363-1.021l-2.162-2.666c-0.199-0.244-0.199-0.645,0-0.891l2.162-2.666
		c0.199-0.246,0.363-0.703,0.363-1.02v-3.277c0-0.316-0.164-0.773-0.363-1.021L286.19,384.815z M287.846,391.79
		c0,0.117-0.094,0.387-0.176,0.48l-2.162,2.664c-0.457,0.564-0.457,1.422,0,1.996l2.162,2.666c0.068,0.094,0.176,0.363,0.176,0.48
		v25.725c0,0.152-0.047,0.436-0.119,0.623l-1.865,1.865c-0.199,0.061-0.471,0.119-0.623,0.119h-11.13
		c-0.151,0-0.435-0.047-0.622-0.119l-1.867-1.865c-0.058-0.201-0.117-0.471-0.117-0.623v-25.725c0-0.117,0.095-0.387,0.177-0.48
		l2.16-2.666c0.458-0.562,0.458-1.42,0-1.996l-2.16-2.664c-0.07-0.094-0.177-0.363-0.177-0.48v-3.277
		c0-0.115,0.095-0.387,0.177-0.479l2.16-2.666l0.27-0.129h11.13l0.27,0.129l2.162,2.666c0.068,0.094,0.176,0.363,0.176,0.479v3.277
		H287.846z M275.494,378.543h8.383v4.943h-8.383V378.543z M275.635,396.028c0-0.246,0.201-0.447,0.447-0.447h7.196
		c0.248,0,0.447,0.201,0.447,0.447s-0.199,0.445-0.447,0.445h-7.196C275.836,396.473,275.635,396.274,275.635,396.028z
		 M283.946,375.317h-1.971v2.359h-4.719v-2.359h-1.832l1.443-2.221c0,0,1.127-0.188,2.819-0.188c1.691,0,2.818,0.188,2.818,0.188
		L283.946,375.317z M285.051,403.354v18.115c0,1.598-1.291,2.889-2.889,2.889h-4.954c-1.598,0-2.889-1.291-2.889-2.889v-18.115
		c0-1.598,1.291-2.889,2.889-2.889h4.954C283.76,400.454,285.051,401.756,285.051,403.354z" />
        <rect
          x="45.728"
          y="446.233"
          fill="#FFFFFF"
          width="277.667"
          height="51.727"
        />
        <path d="M318.407,471.713c0,9.016-7.309,16.324-16.323,16.324v9.92H66.535v-9.92
                    c-9.014,0-16.322-7.311-16.322-16.324s7.309-16.322,16.322-16.322v-9.92h235.549v9.92
		C311.098,455.391,318.407,462.7,318.407,471.713z M302.084,467.553c-2.297,0-4.162,1.861-4.162,4.16
		c0,2.297,1.865,4.158,4.162,4.158s4.16-1.861,4.16-4.158C306.245,469.415,304.381,467.553,302.084,467.553z M62.375,471.713
		c0,2.297,1.862,4.158,4.161,4.158c2.297,0,4.161-1.861,4.161-4.158c0-2.299-1.864-4.16-4.161-4.16
		C64.237,467.553,62.375,469.415,62.375,471.713z" />
        <g>
          <path
            fill="#FFFFFF"
            d="M217.492,465.422l-4.869,1.969l0.176,0.633c0.457-0.176,0.867-0.264,1.23-0.264
                        c0.305,0,0.56,0.082,0.765,0.246s0.346,0.425,0.422,0.782s0.114,1.474,0.114,3.349v6.24c0,0.938-0.029,1.506-0.088,1.705
			c-0.117,0.41-0.322,0.709-0.615,0.896c-0.398,0.258-1.008,0.387-1.828,0.387v0.633h8.244v-0.633c-0.727,0-1.283-0.105-1.67-0.316
			s-0.656-0.475-0.809-0.791c-0.223-0.457-0.334-1.131-0.334-2.021v-7.717c0.562-1.102,1.107-1.893,1.635-2.373
			c0.246-0.234,0.475-0.352,0.686-0.352c0.246,0,0.624,0.202,1.134,0.606s0.97,0.606,1.38,0.606c0.422,0,0.785-0.158,1.09-0.475
			s0.457-0.703,0.457-1.16c0-0.516-0.211-0.97-0.633-1.362s-0.955-0.589-1.6-0.589c-1.418,0-2.801,1.207-4.148,3.621v-3.621H217.492
			z M206.031,468.252c1.23,1.641,1.846,3.891,1.846,6.75c0,2.285-0.369,3.896-1.107,4.834s-1.676,1.406-2.812,1.406
			c-1.523,0-2.751-0.85-3.683-2.549s-1.397-3.721-1.397-6.064c0-1.453,0.193-2.643,0.58-3.568s0.894-1.573,1.521-1.942
			s1.251-0.554,1.872-0.554C204.139,466.565,205.199,467.127,206.031,468.252z M199.598,466.468
			c-1.195,0.697-2.159,1.775-2.892,3.234s-1.099,2.927-1.099,4.403c0,2.027,0.604,3.855,1.811,5.484c1.43,1.934,3.357,2.9,5.783,2.9
			c1.488,0,2.839-0.375,4.052-1.125s2.165-1.863,2.856-3.34s1.037-2.936,1.037-4.377c0-2.051-0.627-3.867-1.881-5.449
			c-1.477-1.852-3.434-2.777-5.871-2.777C202.059,465.422,200.793,465.771,199.598,466.468z M181.439,457.002l-4.816,1.969
			l0.246,0.615c0.551-0.188,0.949-0.281,1.195-0.281c0.305,0,0.548,0.076,0.729,0.229s0.316,0.439,0.404,0.861
			s0.132,1.553,0.132,3.393v14.572c0,1.008-0.07,1.676-0.211,2.004s-0.328,0.551-0.562,0.668c-0.41,0.223-0.973,0.334-1.688,0.334
			v0.633h7.98v-0.633c-0.82,0-1.397-0.091-1.731-0.272s-0.562-0.407-0.686-0.677s-0.185-0.955-0.185-2.057v-8.508
			c0.867-0.926,1.611-1.541,2.232-1.846s1.219-0.457,1.793-0.457c0.562,0,1.043,0.138,1.441,0.413s0.688,0.688,0.87,1.239
			s0.272,1.705,0.272,3.463v5.695c0,0.914-0.018,1.465-0.053,1.652c-0.117,0.445-0.322,0.782-0.615,1.011s-0.814,0.343-1.564,0.343
			h-0.369v0.633h7.91v-0.633c-0.75,0-1.266-0.082-1.547-0.246s-0.48-0.387-0.598-0.668c-0.164-0.375-0.246-1.072-0.246-2.092v-5.695
			c0-1.992-0.111-3.363-0.334-4.113c-0.316-1.078-0.803-1.869-1.459-2.373s-1.441-0.756-2.355-0.756
			c-0.762,0-1.523,0.202-2.285,0.606s-1.793,1.321-3.094,2.751v-11.777H181.439z M172.299,465.422l-4.852,1.969l0.246,0.633
			c0.469-0.176,0.867-0.264,1.195-0.264c0.305,0,0.545,0.073,0.721,0.22s0.305,0.407,0.387,0.782
			c0.105,0.516,0.158,1.646,0.158,3.393v6.205c0,0.996-0.079,1.67-0.237,2.021s-0.372,0.604-0.642,0.756s-0.797,0.229-1.582,0.229
			v0.633h7.822v-0.633c-0.762,0-1.286-0.082-1.573-0.246s-0.504-0.413-0.65-0.747s-0.22-1.005-0.22-2.013v-12.938H172.299z
			 M170.339,457.521c-0.346,0.346-0.519,0.765-0.519,1.257s0.176,0.914,0.527,1.266s0.773,0.527,1.266,0.527
			s0.911-0.176,1.257-0.527s0.519-0.773,0.519-1.266s-0.173-0.911-0.519-1.257s-0.765-0.519-1.257-0.519
			C171.109,457.002,170.685,457.175,170.339,457.521z M147.812,460.008c1.348-0.34,2.549-0.51,3.604-0.51
			c2.812,0,5.115,0.949,6.908,2.848s2.689,4.494,2.689,7.787c0,3.27-0.896,5.859-2.689,7.77s-4.049,2.865-6.768,2.865
			c-1.008,0-2.256-0.164-3.744-0.492V460.008z M151.662,481.999c4.629,0,8.074-1.242,10.336-3.727
			c2.016-2.227,3.023-4.998,3.023-8.314c0-2.473-0.565-4.652-1.696-6.539s-2.625-3.234-4.482-4.043s-4.567-1.213-8.13-1.213h-9.703
			v0.65h0.896c0.902,0,1.582,0.258,2.039,0.773c0.328,0.375,0.492,1.307,0.492,2.795v15.398c0,1.348-0.129,2.215-0.387,2.602
			c-0.422,0.645-1.137,0.967-2.145,0.967h-0.896v0.65H151.662z"
          />
        </g>
      </g>
    </svg>
  </div>;

const Header = ({ sendOnClick }) =>
  <div className="mb5 mb4-ns">
    <nav className="pa3 pa4-l db flex-l items-center justify-around">
      <Link to="/">
        <Logo className="center mb4 ma0-l" width="126px" height="70px" />
      </Link>
      <div className="avenir tracked">
        <Link
          onClick={e => sendOnClick(e)}
          className="db tc dib-l kitsch-brown mv3 ml5-l f7 f6-ns link"
          to="/de-ce-noi"
        >
          DE CE DIHOR?
        </Link>
        <Link
          onClick={e => sendOnClick(e)}
          className="db tc dib-l kitsch-brown mv3 ml5-l f7 f6-ns link"
          to="/blog"
        >
          BLOG
        </Link>
        <Link
          onClick={e => sendOnClick(e)}
          className="db tc dib-l kitsch-brown mv3 ml5-l f7 f6-ns link"
          to="/mai-multe-produse"
        >
          MAI MULTE PRODUSE
        </Link>
      </div>
    </nav>
  </div>;

export default Header;

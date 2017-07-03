import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import product from './product_03.jpg';

console.log(product);

const Logo = ({width, height}) => (
  <div style={{width, height}}>
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 246.418 243.214" enableBackground="new 0 0 246.418 243.214">
      <g>
        <path fill="#FCD3C1" d="M190.891,203.429c-9.352,7.672-15.74,16.859-27.156,22.053c-18.543,8.436-36.465,4.76-54.905-1.596
          c-14.32-4.936-29.633-7.205-41.915-16.438c-10.855-8.158-21.471-16.635-32.413-24.678c-9.468-6.959-19.536-12.975-25.33-23.66
		c-5.092-9.39-6.032-20.585-4.631-31.174s4.996-20.746,8.569-30.812c2.729-7.69,3.613-16.326,7.143-23.519
		c4.208-8.575,11.379-16.313,18.442-22.601c9.248-8.229,19.531-15.262,28.556-23.407c17.495-15.793,45.998-18.723,68.463-14.617
		c15.881,2.902,32.34,9.287,45.863,18.18c8.332,5.478,11.746,14.453,16.664,22.646c6.215,10.353,15.975,14.139,24.287,22.255
		c10.697,10.446,13.639,25.202,11.094,39.502c-5.756,32.329-13.395,65.782-40.799,86.349
		C192.163,202.408,191.52,202.914,190.891,203.429z"/>
	<path fill="#3D2F2B" d="M127.711,234.929c-27.224,0-55.156-9.316-77.589-26.359c-21.278-16.164-38.876-42.23-47.075-69.727
          c-6.408-21.496-2.699-43.74,11.022-66.113c10.182-16.599,25.853-39.167,42.703-52.416c31.19-24.529,78.095-27.053,119.489-6.434
		c25.715,12.811,44.871,34.933,55.4,63.976c9.844,27.153,15.449,69.153-1.146,98.161c-5.285,9.24-13.832,18.869-24.719,27.848
		c-18.346,15.127-40.941,26.424-58.967,29.479C140.553,234.408,134.151,234.929,127.711,234.929z M118.433,2.603
		c-21.153,0-42.558,5.64-60.227,19.534C41.627,35.174,26.129,57.505,16.048,73.943C2.685,95.731-0.941,117.343,5.27,138.179
		c8.063,27.043,25.355,52.666,46.255,68.543c27.239,20.693,62.719,29.793,94.919,24.334c17.648-2.992,39.826-14.096,57.879-28.982
		c10.67-8.803,19.033-18.209,24.18-27.207c16.201-28.321,10.654-69.533,0.979-96.22c-10.32-28.472-29.082-50.15-54.254-62.689
		C158.915,7.831,138.79,2.603,118.433,2.603z"/>
	<path fill="#3D2F2B" d="M184.634,26.537c2.045,1.229,4.074,2.519,6.095,3.874c29.807,19.977,50.271,50.453,54.735,81.527
          c3.752,26.095-3.607,51.093-21.275,72.291l-1.59,1.908c-20.962,25.174-47.051,56.508-82.662,57.062
		c-42.11,0.657-82.342-19.301-107.611-53.393c-18.619-25.117-29.58-54.898-30.072-81.708c-0.459-24.932,9.848-45.223,32.43-63.855
		c13.768-11.36,31.84-25.057,49.535-30.187C119.894,3.712,153.641,7.915,184.634,26.537z M71.667,222.429
		c20.387,12.25,43.99,18.827,68.231,18.451c34.547-0.54,60.26-31.418,80.919-56.229l1.588-1.91
		c17.238-20.678,24.416-45.046,20.763-70.474c-4.374-30.434-24.46-60.315-53.731-79.93c-32.045-21.488-67.233-26.88-104.572-16.054
		C67.577,21.296,49.754,34.814,36.16,46.03l-0.737-0.893l0.737,0.893C14.166,64.179,4.128,83.887,4.572,108.056
		c0.484,26.336,11.279,55.631,29.618,80.369C44.466,202.289,57.265,213.776,71.667,222.429z"/>
	<path fill="#3D2F2B" d="M80.196,182.265v2.352c0,1.084-0.262,1.879-0.784,2.387s-1.253,0.762-2.191,0.762
          c-0.832,0-1.51-0.279-2.032-0.84s-0.783-1.355-0.783-2.387v-5.773c0-1.234,0.231-2.158,0.694-2.77
		c0.462-0.611,1.188-0.918,2.175-0.918c0.402,0,0.774,0.059,1.115,0.176s0.643,0.291,0.906,0.52s0.471,0.529,0.621,0.902
		s0.226,0.801,0.226,1.285v2.195h-2.311v-1.445c0-0.744-0.187-1.117-0.558-1.117c-0.222,0-0.368,0.082-0.438,0.246
		c-0.071,0.164-0.106,0.393-0.106,0.684v5.883c0,0.256,0.05,0.477,0.149,0.664s0.231,0.281,0.396,0.281
		c0.15,0,0.28-0.068,0.392-0.207c0.11-0.139,0.166-0.385,0.166-0.738v-2.141H80.196z"/>
	<polygon fill="#3D2F2B" points="83.866,187.625 83.866,175.179 88.541,175.179 88.541,177.593 86.243,177.593 86.243,180.023 
		88.448,180.023 88.448,182.359 86.243,182.359 86.243,185.195 88.693,185.195 88.693,187.625 	"/>
	<polygon fill="#3D2F2B" points="92.31,187.625 92.31,175.179 94.647,175.179 94.647,185.195 97.051,185.195 97.051,187.625 	" />
        <polygon fill="#3D2F2B" points="100.402,187.625 100.402,175.179 105.077,175.179 105.077,177.593 102.779,177.593 
		102.779,180.023 104.984,180.023 104.984,182.359 102.779,182.359 102.779,185.195 105.229,185.195 105.229,187.625 	"/>
	<path fill="#3D2F2B" d="M108.846,187.625v-12.445h3.167c0.828,0,1.441,0.215,1.84,0.645s0.598,1.162,0.598,2.199v0.133
          c0,0.182,0,0.318,0,0.406s-0.008,0.227-0.023,0.414s-0.038,0.334-0.066,0.441c-0.029,0.107-0.072,0.238-0.13,0.395
		s-0.128,0.283-0.212,0.383s-0.19,0.195-0.319,0.289c-0.128,0.094-0.276,0.164-0.444,0.211c0.243,0.068,0.451,0.186,0.624,0.352
		s0.303,0.342,0.392,0.527s0.158,0.412,0.209,0.684s0.081,0.498,0.09,0.68s0.014,0.4,0.014,0.656c0,0.656-0.039,1.219-0.116,1.688
		c-0.078,0.469-0.212,0.887-0.402,1.254s-0.454,0.641-0.793,0.82s-0.759,0.27-1.259,0.27H108.846z M111.13,179.867h0.478
		c0.115,0,0.21-0.029,0.282-0.086c0.073-0.057,0.125-0.139,0.156-0.246s0.051-0.203,0.06-0.289s0.014-0.189,0.014-0.309v-1.234
		c0-0.396-0.166-0.594-0.498-0.594h-0.491V179.867z M111.13,181.804v3.609c0.106,0.01,0.184,0.016,0.232,0.016
		c0.606,0,0.909-0.307,0.909-0.922v-1.555c0-0.396-0.056-0.686-0.169-0.871s-0.293-0.277-0.541-0.277H111.13z"/>
	<path fill="#3D2F2B" d="M120.491,181.96v5.664h-2.363v-12.445h3.586c0.367,0,0.682,0.059,0.942,0.176
          c0.262,0.117,0.467,0.271,0.618,0.461c0.15,0.189,0.269,0.443,0.354,0.758c0.087,0.314,0.144,0.631,0.17,0.945
		s0.04,0.697,0.04,1.145c0,0.234-0.004,0.426-0.011,0.574c-0.006,0.148-0.03,0.336-0.072,0.562
		c-0.043,0.227-0.102,0.416-0.177,0.566s-0.188,0.299-0.342,0.445c-0.152,0.146-0.338,0.258-0.555,0.336
		c0.217,0.047,0.396,0.135,0.538,0.262s0.243,0.285,0.306,0.473c0.062,0.188,0.104,0.361,0.126,0.52s0.033,0.338,0.033,0.535
		c0,2.057-0.009,3.619-0.026,4.688h-2.284v-4.852c0-0.193-0.017-0.346-0.05-0.461s-0.096-0.197-0.187-0.246s-0.178-0.08-0.262-0.09
		S120.664,181.96,120.491,181.96z M120.504,177.484v2.32h0.584c0.311,0,0.465-0.381,0.465-1.141c0-0.506-0.061-0.828-0.183-0.969
		c-0.121-0.141-0.368-0.211-0.74-0.211H120.504z"/>
	<path fill="#3D2F2B" d="M131.87,175.179l1.168,12.445h-2.258l-0.166-1.875h-1.182l-0.146,1.875h-2.271l1.195-12.445H131.87z
          M130.124,177.515h-0.213l-0.312,5.969h0.836L130.124,177.515z"/>
	<polygon fill="#3D2F2B" points="135.731,175.179 140.844,175.179 140.844,177.578 139.458,177.578 139.458,187.625 137.12,187.625 
		137.12,177.578 135.731,177.578 	"/>
	<rect x="144.282" y="175.179" fill="#3D2F2B" width="2.258" height="12.445" />
        <path fill="#3D2F2B" d="M150.276,184.265v-5.93c0-1.037,0.238-1.84,0.715-2.41c0.475-0.57,1.191-0.863,2.148-0.879
          c0.982,0.016,1.711,0.309,2.188,0.879c0.475,0.57,0.713,1.373,0.713,2.41v5.93c0,0.506-0.053,0.965-0.162,1.379
		s-0.273,0.783-0.494,1.105c-0.223,0.322-0.521,0.572-0.9,0.75s-0.812,0.258-1.305,0.242c-0.518,0.016-0.967-0.064-1.346-0.242
		c-0.377-0.178-0.678-0.428-0.898-0.75c-0.223-0.322-0.387-0.691-0.496-1.105C150.331,185.23,150.276,184.771,150.276,184.265z
		 M153.159,185.304l0.223-0.059l0.152-0.18l0.09-0.23c0.021-0.072,0.037-0.17,0.047-0.293c0.008-0.123,0.014-0.217,0.016-0.281
		s0.004-0.154,0.004-0.27v-0.062v-5c0-0.031,0-0.094,0.002-0.188c0.004-0.094,0.004-0.164,0-0.211
		c-0.002-0.047-0.004-0.115-0.006-0.207s-0.01-0.162-0.02-0.211l-0.041-0.188l-0.062-0.172l-0.092-0.125l-0.133-0.094l-0.18-0.027
		c-0.094,0-0.174,0.018-0.242,0.055l-0.164,0.176l-0.1,0.219c-0.025,0.064-0.043,0.162-0.053,0.289
		c-0.008,0.127-0.014,0.219-0.014,0.273s0,0.146,0,0.277v0.055v0.047v5c0,0.115,0.002,0.205,0.004,0.273s0.008,0.166,0.018,0.297
		c0.008,0.131,0.025,0.236,0.049,0.316l0.096,0.254l0.164,0.199C152.985,185.283,153.065,185.304,153.159,185.304z"/>
	<polygon fill="#3D2F2B" points="165.514,175.179 165.514,187.625 163.229,187.625 162.061,181.398 162.061,187.625 
		159.776,187.625 159.776,175.179 162.18,175.179 163.256,181.132 163.256,175.179 	"/>
	<polygon fill="#3D2F2B" points="111.16,46.793 116.273,46.793 116.273,49.192 114.885,49.192 114.885,59.239 112.547,59.239 
112.547,49.192 111.16,49.192 	"/>
	<polygon fill="#3D2F2B" points="119.315,53.59 119.315,59.239 116.991,59.239 116.991,46.793 119.315,46.793 119.315,51.239 
		120.417,51.239 120.417,46.793 122.741,46.793 122.741,59.239 120.417,59.239 120.417,53.59 	"/>
	<polygon fill="#3D2F2B" points="123.897,59.239 123.897,46.793 128.571,46.793 128.571,49.208 126.274,49.208 126.274,51.637 
		128.479,51.637 128.479,53.973 126.274,53.973 126.274,56.809 128.723,56.809 128.723,59.239 	"/>
	<path fill="#3D2F2B" d="M219.305,95.493c0-0.895-0.344-1.64-1.031-2.236c-0.641-0.55-1.375-0.824-2.203-0.824
          c-1.109,0-2.102,0.971-2.977,2.913c-0.703,1.579-1.07,2.977-1.102,4.193c-0.141,4.626-0.242,7.469-0.305,8.527
		c-2.547,0.094-5.578,0.453-9.094,1.078l-9,1.688c-0.016-0.547,0.023-1.336,0.117-2.367c0.109-1.109,0.164-1.859,0.164-2.25
		c0-1.188,0.043-2.973,0.129-5.355s0.129-4.168,0.129-5.355c0-0.859-0.305-1.586-0.914-2.18s-1.367-0.891-2.273-0.891
		s-1.664,0.29-2.273,0.869c-0.609,0.58-0.914,1.289-0.914,2.128c0,1.953-0.047,4.893-0.141,8.82s-0.141,6.867-0.141,8.82
		c0,1.541-0.137,3.844-0.41,6.91s-0.41,5.369-0.41,6.909c0,0.839,0.305,1.548,0.914,2.128c0.609,0.579,1.367,0.869,2.273,0.869
		s1.664-0.277,2.273-0.831c0.609-0.555,0.914-1.233,0.914-2.035c0-1.298,0.078-2.969,0.234-5.011
		c0.188-2.319,0.297-3.975,0.328-4.967c3-0.562,6-1.117,9-1.664c3.609-0.656,6.641-1.039,9.094-1.148
		c-0.031,0.688-0.047,1.477-0.047,2.367c0,1.141,0.051,2.852,0.152,5.133s0.152,3.992,0.152,5.133c0,0.844,0.336,1.559,1.008,2.145
		s1.469,0.879,2.391,0.879c0.906,0,1.664-0.298,2.273-0.895c0.609-0.596,0.914-1.326,0.914-2.189c0-1.146-0.086-2.856-0.258-5.132
		c-0.172-2.275-0.258-3.986-0.258-5.132c0-1.49,0.078-3.704,0.234-6.638c0.156-2.935,0.234-5.147,0.234-6.638
		c0-0.439,0.043-1.118,0.129-2.036c0.086-0.918,0.129-1.597,0.129-2.037c0-0.848,0.156-1.844,0.469-2.99
		C219.274,95.963,219.305,95.728,219.305,95.493z M182.79,102.627c0.453-0.641,0.68-1.352,0.68-2.133
		c0-1.75-0.133-3.281-0.398-4.594c-0.375-1.828-1.359-2.742-2.953-2.742c-0.969,0-1.797,0.336-2.484,1.008
		c-0.422-0.094-0.91-0.164-1.465-0.211s-1.176-0.07-1.863-0.07c-4.062,0-8.039,2.312-11.93,6.938
		c-4.578,5.453-6.867,10.797-6.867,16.031c0,3.344,1.156,6.25,3.469,8.719c2.422,2.562,5.391,3.844,8.906,3.844
		c4.453,0,8.828-1.812,13.125-5.438c0.812-0.688,1.219-1.492,1.219-2.414c0-0.828-0.305-1.562-0.914-2.203
		c-0.656-0.688-1.453-1.031-2.391-1.031c-0.625,0-1.547,0.406-2.766,1.219c-1.812,1.234-3,2-3.562,2.297
		c-1.594,0.812-3.164,1.219-4.711,1.219c-1.594,0-2.961-0.609-4.102-1.828s-1.711-2.68-1.711-4.383
		c0-3.734,1.805-7.742,5.414-12.023c2.578-3.062,4.852-4.594,6.82-4.594c1,0,1.617,0.055,1.852,0.164
		c0.312,0.141,0.625,0.562,0.938,1.266c0.672,1.484,1.711,2.227,3.117,2.227C181.336,103.893,182.196,103.471,182.79,102.627z
		 M146.438,127.917c4.594-2.078,6.891-5.133,6.891-9.164c0-3.312-1.109-5.906-3.328-7.781c-2.016-1.688-4.758-2.664-8.227-2.93
		c-1.984-0.109-3.977-0.219-5.977-0.328c-1.141-0.156-1.996-0.426-2.566-0.809s-0.855-0.871-0.855-1.465
		c0-1.141,0.938-2.195,2.812-3.164c1.812-0.953,3.727-1.438,5.742-1.453c0.75,0,1.855,0.156,3.316,0.469s2.559,0.469,3.293,0.469
		c0.984,0,1.789-0.352,2.414-1.055c0.562-0.625,0.844-1.344,0.844-2.156c0-1.141-1.398-2.148-4.195-3.023
		c-2.25-0.703-4.141-1.055-5.672-1.055c-3.859,0-7.391,1.27-10.594,3.809s-4.828,5.332-4.875,8.379
		c-0.047,2.422,1.375,4.281,4.266,5.578c2.141,0.953,4.562,1.461,7.266,1.523c3.484,0.078,5.805,0.344,6.961,0.797
		c1.625,0.625,2.438,1.922,2.438,3.891c0,1.438-1.305,2.758-3.914,3.961c-2.516,1.172-5.117,1.758-7.805,1.758
		c-3.141,0-5.156-0.961-6.047-2.883c-0.656-1.438-1.688-2.156-3.094-2.156c-1.047,0-1.867,0.324-2.461,0.973
		s-0.891,1.465-0.891,2.449c0,1.922,0.961,3.617,2.883,5.086c2.281,1.766,5.406,2.648,9.375,2.648
		C138.938,130.284,142.938,129.495,146.438,127.917z M120.387,99.827c0.633-0.617,0.949-1.371,0.949-2.262s-0.316-1.641-0.949-2.25
		s-1.418-0.914-2.355-0.914c-1.188,0-2.969-0.082-5.344-0.246s-4.156-0.246-5.344-0.246c-0.953,0-2.379,0.016-4.277,0.047
		s-3.324,0.047-4.277,0.047s-2.203-0.086-3.75-0.258c-1.938-0.234-3.18-0.367-3.727-0.398c-1.062-0.078-1.922,0.266-2.578,1.031
		c-0.562,0.641-0.844,1.359-0.844,2.156c0,1.625,0.867,2.648,2.602,3.07c2.047,0.5,4.812,0.75,8.297,0.75h1.219
		c0.062,1.562,0.281,4.398,0.656,8.508c0.328,3.578,0.492,6.414,0.492,8.508c0,0.734,0.051,1.828,0.152,3.281
		s0.152,2.539,0.152,3.258c0,0.234-0.039,0.574-0.117,1.02s-0.117,0.777-0.117,0.996c0,0.922,0.367,1.688,1.102,2.297
		c0.656,0.547,1.414,0.82,2.273,0.82c1.188,0,2.102-0.602,2.742-1.805c0.5-0.938,0.75-1.992,0.75-3.164
		c0-0.531-0.055-1.32-0.164-2.367s-0.164-1.836-0.164-2.367c0-2.344-0.164-5.531-0.492-9.562c-0.359-4.562-0.57-7.734-0.633-9.516
		c1.312-0.016,3.211,0.062,5.695,0.234c2.578,0.172,4.477,0.258,5.695,0.258C118.969,100.752,119.754,100.444,120.387,99.827z
		 M85.357,100.424c0.721-0.578,1.081-1.367,1.081-2.367c0-1.891-0.932-2.969-2.793-3.234c-4.68-0.656-8.502-0.984-11.47-0.984
		c-3.301,0-5.617,0.062-6.95,0.188c-0.817,0.078-1.506,0.383-2.066,0.914c-0.605,0.578-0.908,1.328-0.908,2.25
		c0,0.906,0.316,1.664,0.949,2.273s1.418,0.914,2.355,0.914l5.086-0.141c-0.312,3.859-0.469,7.914-0.469,12.164
		c0,5.219,0.016,8.75,0.047,10.594c-1.854,0.234-3.35,0.352-4.485,0.352c-1.003,0-1.834,0.312-2.493,0.938
		c-0.66,0.625-0.99,1.375-0.99,2.25s0.315,1.621,0.946,2.238c0.63,0.617,1.425,0.926,2.383,0.926c1.054,0,2.634-0.137,4.741-0.41
		s3.688-0.41,4.742-0.41c0.894,0,2.234-0.02,4.023-0.059c1.787-0.039,3.129-0.059,4.022-0.059c0.958,0,1.753-0.309,2.383-0.926
		c0.631-0.617,0.946-1.363,0.946-2.238s-0.309-1.625-0.926-2.25s-1.395-0.938-2.332-0.938c-2.156,0-4.273,0.023-6.352,0.07
		l0.023-10.523c0-4.766,0.109-8.586,0.328-11.461c3.359,0.438,5.415,0.656,6.165,0.656
		C84.094,101.151,84.765,100.909,85.357,100.424z M48.891,125.526c3.562,2.922,6.461,4.383,8.695,4.383
		c1.031,0,1.836-0.422,2.414-1.266c0.422-0.625,0.633-1.273,0.633-1.945c0-1.516-0.836-2.539-2.508-3.07
		c-0.922-0.297-1.781-0.734-2.578-1.312c-1.594-1.188-3.391-2.703-5.391-4.547c-1.719-1.609-3.43-3.219-5.133-4.828
		c3.047-2.906,5.945-5.852,8.695-8.836c3.719-4.062,5.578-6.578,5.578-7.547c0-0.891-0.332-1.648-0.996-2.273
		s-1.441-0.938-2.332-0.938c-0.938,0-1.766,0.391-2.484,1.172c-7.016,7.656-11.07,12-12.164,13.031
		c0.031-1.016,0.133-2.914,0.305-5.695c0.141-2.391,0.211-4.289,0.211-5.695c0-0.875-0.309-1.625-0.926-2.25
		s-1.395-0.938-2.332-0.938s-1.719,0.312-2.344,0.938s-0.938,1.375-0.938,2.25c0,3.469-0.109,8.68-0.328,15.633
		s-0.328,12.164-0.328,15.633c0,0.891,0.273,1.727,0.82,2.508c0.703,1,1.672,1.5,2.906,1.5c1.047,0,1.844-0.398,2.391-1.195
		c0.391-0.578,0.586-1.211,0.586-1.898l0.023-9.867C45.321,122.299,47.829,124.651,48.891,125.526z"/>
</g>
    </svg>
  </div>
)

const Header = () => (
  <div className="mb3">
    <nav className="pa3 pa4-ns flex items-center justify-between">
      <Logo width="100px" height="100px" />
      <div className="avenir tracked">
        <a className="dib kitsch-brown mr6 f5 link" href="#">DE CE KITSCH?</a>
        <a className="dib kitsch-brown mr6 f5 link" href="#">BLOG</a>
        <a className="dib kitsch-brown mr6 f5 link" href="#">MAI MULTE PRODUSE</a>
      </div>
    </nav>
  </div>
)

const Hero = () => (
  <div className="w-100 flex flex-column items-center justify-center">
    <img className="mb3" src={process.env.PUBLIC_URL + '/product-logo.svg'} alt=""/>
    <h3 className="f2 fw6 ma0 mb4 kitsch-brown avenir">Boss, ti-e dor de mare?</h3>
    <p className="f4 ma0 mb5 kitsch-brown tc avenir measure">
      Stiu ca iti amintesti cu drag de mirosul puternic de hamsii si usturoi in diminetiile calduroase cand mergeai la plaja. Acum nu mai trebuie sa te duci pe faleza pentru o hamsie, vine hamsia la tine.
    </p>
    <img className="vh-75" src={product} alt=""/>
    <a className="f4 avenir link dim ph4 pv3 mb2 mt4 dib white bg-kitsch-brown" href="#0">Cumpara acum</a>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App mw9 ph6 mt2 mb4 center">
        <Header/> 
        <Hero/>
      </div>
    );
  }
}

export default App;

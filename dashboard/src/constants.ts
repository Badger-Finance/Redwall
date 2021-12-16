import { BigNumber } from '@ethersproject/bignumber';

export const GRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/axejintao/jello-jintao';

export const ATTACKER_ADDRESS = '0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107';
export const USER_ADDRESSES = [
  '0x3fc3e6514fd4925f55fb3ae17bbfbca2eb126608',
  '0xe32b8238bca33a3cd019c69e27942f2e78b46bcc',
  '0x33b0086c7928f27fc5908b0138d6657149f9c209',
  '0x33b0086c7928f27fc5908b0138d6657149f9c209',
  '0x4335793db316340f9fa92cd69e903452a4590006',
  '0xb15e535dffdf3fe70290ab89aecc3f18c7078cdc',
  '0x950a1d93c9d51409a6d537c49ad34cf42e01d31a',
  '0x7822159ee394d14745cde63a706f965fb73c7ac8',
  '0xbc30e90dc528ece58c1a51b6fb6d572838416489',
  '0x3fddb5cf1e8e5696e1c76bf15f454e04cf161c66',
  '0x281975bf5d79c1e26b431a28d2059a1e750393c9',
  '0xe0b6865d3afeb897d37760b2cec945949a27f52d',
  '0xad6c3d43b6765f2289b02384f0de412bef87bd37',
  '0xb0812e0006470fe99f71165fc7c1a2312f7b90f2',
  '0xf248e3a38bbbfa1a20fc6fcccb0a35af3e51d642',
  '0x1fafb618033fb07d3a99704a47451971976cb586',
  '0x2db3865a9c07a651f5309525dd9f991cca9984f7',
  '0x2db3865a9c07a651f5309525dd9f991cca9984f7',
  '0x63f0d5f432acbe8f7379a568128bb66daf14c504',
  '0x4e65175f05b4140a0747c29cce997cd4bb7190d4',
  '0x8fb583e71e0d05b063cf89a82997e90b0e26b7d5',
  '0xb027dd91830a059ff43298286c8e9af11d08f262',
  '0x66f38834895920589f66a8eabc2b6a543b0eca24',
  '0x806603f47d3ea5bdbc9e4ad5d07562fa67002043',
  '0xc1e8cb20317ae543804ab1d58e954a9c0b44b7f0',
  '0x957ee7a79cead5337746a468ece63c23bef8bd4f',
  '0x743b317d39c4bedf34b45917d890e42cd2fd266a',
  '0xa325853f58affb9810b1e0144f119741b5ca4b5a',
  '0xfddbd16c471878d179992a491438d9bc0a162a17',
  '0xa35365238b226d8c2db8925964bf45787539d232',
  '0x0079ce80043edc3325598e4a3b6293ab779bf174',
  '0x0d996171e7883a286ef720030935f72d0bac8219',
  '0x83193738e5432ae814a1d551d2da623ce9b500c6',
  '0x1fafb618033fb07d3a99704a47451971976cb586',
  '0x7e3daafeadc9c799048985156e8a00c4bc7cbc66',
  '0x31ec4225b5803d10ed2920a4dfdbe935ea24fc02',
  '0xbbdd3056bd9b1c887ae8b53b894340276b417ffe',
  '0x256658bf0573f32ddde32c51b0368c2c9a214b1f',
  '0xc610d02270c39a0581fe0137f5e93ae5053d3c66',
  '0x45d09a3fc6103d8f08f208247333c31bf8ebcbea',
  '0xb84848ce4a46a44f06864b5decc2fe07b842cf30',
  '0xba3a6b9c43e74de388550e9bcc73a81a01d48cf7',
  '0x6dce215f5d0209bee096fb5147c423344d10553b',
  '0xb6793d0d77e8cee03654183e52da83ebbcec4c3c',
  '0xbca574fd1b10d0493c052ca8277f64d891d9bf75',
  '0xb1c120957a5b5c45a15fd6e5e17f5a2b70bf49d0',
  '0xe6bd1916b9b6aeff8a96c13b7a247f82cf015d70',
  '0xe6414ce40a6231851788ad8fa3113ca2ba91ed17',
  '0xe2777e09e622e4b4fdf2c31385b79d56657a3a4c',
  '0xe6414ce40a6231851788ad8fa3113ca2ba91ed17',
  '0xaf297dec752c909092a117a932a8ca4aaaff9795',
  '0xddf4433f004acce1edeab1e01fec8f21c8513e68',
  '0x0fd492cb2440074b9b5f16dd008a972c55c60a49',
  '0xddf4433f004acce1edeab1e01fec8f21c8513e68',
  '0x9e9386b977144d88033d8c2b5d1e3529e5b66ab2',
  '0x73a6a002b9538f636fbfe6bfb8b7440b8b3a510e',
  '0xff99be7682af03f743c3fa72fbe93d264d42c259',
  '0x602a8f582b2e84a49f91899d6cdd36b825146637',
  '0x41de0ff7e391b304ed0033819e91046853e14656',
  '0x97389c19ff30369a8daaef2298afc2947b4ad362',
  '0x73a6a002b9538f636fbfe6bfb8b7440b8b3a510e',
  '0xfb8aeceb6a63c595b01c728e362ea1bc0f8a5ab3',
  '0x798cd25b8d3c3325732e94dbd00574e07be180ef',
  '0xfa5756494fea34c83808ccb6626f6b7e66d46c4c',
  '0x7338afb07db145220849b04a45243956f20b14d9',
  '0x349fa05334c0a0edc9d34acf088f8b85c87ed9b7',
  '0x6314ec8d6bcb8ce2344eb462610ac21692a81f79',
  '0x0b0e1670e2a5cfb56898760403c912402c9e597a',
  '0x7ed7888f3bf70ed07f94fd7381d39476928331f7',
  '0x0b0e1670e2a5cfb56898760403c912402c9e597a',
  '0x6f21ebc43250a3f75565d1fddd3e7ce5494839e4',
  '0xa669070d106e96cc2390523e9745b425a1b3a0e0',
  '0x1fe850e040df04f5866912d33d1bffd3179bf369',
  '0x1fe850e040df04f5866912d33d1bffd3179bf369',
  '0x421a8a0c6388faa1550e2636538d8d7605a8cede',
  '0x58abca37609620d4442aefa367f770dd3ce60ad2',
  '0x0e61dae710688c22d8f6d0c3fdd1735d27ddff8f',
  '0x42929deb1c01e8b2d1466c5572e517b4456e4ac2',
  '0x097790d228a564cbc7012f082cbcbc28288397bd',
  '0x097790d228a564cbc7012f082cbcbc28288397bd',
  '0xbd9795a14035dba41bccfc563329aa6b197a0cbb',
  '0xa41f3acd3f6549d929674283c1c37b09b4ec27ff',
  '0xdc308f2d2f00889041e74b9c3d6e6b8ad57d81de',
  '0x8f5db667276e9d805bf5adb315374f8fa299699e',
  '0x2d1bdc590cb736097bc5577c8974e28dc48f5ecc',
  '0xfac01bf00180ff294915e840b4309b823b759f83',
  '0x1a87fe212028dd92fe97bba8e2bafda2f146bea7',
  '0xa9c1c504652ab74e5fd22d6f36df53a2be4a4e0b',
  '0xfed1cae770ca1cd19d7bcc7fa61d3325a9d5d164',
  '0xd2f2f6b0f48e7a12496d8c9f7a2c18e6b76e49e0',
  '0xf87766e79a11c77b3472dbe3aa45795f579564d4',
  '0x75d7b98b1c4bec2444c5a26de608b55f56ff9faa',
  '0x6c0cf880cb20eefabfb09341fba9e2bd29ad3dfa',
  '0xbfbac9fdf2b937d88b7e97506b6c169dd0b03b24',
  '0x1ec2c4e7fff656f76c5a4992bd5efa7e7ff1a460',
  '0x656e1a01055566ad6a06830add7a0f5ef7dd2512',
  '0xa4aaaf352d2b9efc06def2bcb0817083c05ba40b',
  '0x592677809f71980a25836b326686e55b013108a1',
  '0x7df6c4aa3144d6f5335f49bf8383f3dee6ca7334',
  '0x7df6c4aa3144d6f5335f49bf8383f3dee6ca7334',
  '0x1eccd61c9fa53a8d2e823a26cd72a7efd7d0e92e',
  '0xe2caaf0cdb431de16b6f58b4af1cde4b531b7197',
  '0x0f613784776c4d65f416eef0261a18153bb4f334',
  '0x3bba937a4db82bfabe6aef7015a75e9f870533b7',
  '0xc42c2c1e6091a5e3f5f1d25709123cca24d0cfc9',
  '0xc42c2c1e6091a5e3f5f1d25709123cca24d0cfc9',
  '0xd95ab69ca45ebf9d8b0b097d7a3817ce77ced518',
  '0xd95ab69ca45ebf9d8b0b097d7a3817ce77ced518',
  '0x82d8d99955e38239d865a9dd0d44ef5dd06ba99c',
  '0xd7dedcf8ffddceed9ad20a41a5f88dc1268b3ad4',
  '0x531a5ef1f48834cbaadcffe8c4e7dd0d51db9edf',
  '0x531a5ef1f48834cbaadcffe8c4e7dd0d51db9edf',
  '0xd5431fecbb14f20f8ee68360b586d84d589f9f77',
  '0xd5431fecbb14f20f8ee68360b586d84d589f9f77',
  '0xb7377dd86d8c1f15771c9f420e52325f8c18cc86',
  '0xb7377dd86d8c1f15771c9f420e52325f8c18cc86',
  '0x2bf863a129cd3faffcfc6e7caa49588d446b2af3',
  '0x2bf863a129cd3faffcfc6e7caa49588d446b2af3',
  '0xd65370c5565f2bea121f3c22823233f98a4be793',
  '0xd65370c5565f2bea121f3c22823233f98a4be793',
  '0xb54d1e3056f65f0df6df4310559b0f41003495d1',
  '0x09ad186d43615aa3131c6064538af6e0a643ce12',
  '0x564b1a055d9caaaff7435dce6b5f6e522b27de7d',
  '0xcf8baf60a43eca451e12d11a6daf3ffa3474fffd',
  '0xa77d0868a5604d3b525cd323ca4cb04d6d11f279',
  '0x6fb34dc6febadd5cfcec48afdfdc44449debec48',
  '0xfb62df8935504b3f1c2b13b10aa9d8ee67e34690',
  '0xfc7e2b665062b127047171ebb5000d53880bc88c',
  '0xda29c1f7419529f2d97f054cebc1cba22eab0b66',
  '0xa678abb7fa735b6a42c78214d6b150849c9570c4',
  '0xec4fcd1aca723f8456999c5f5d7479dbe9528c11',
  '0x785b70b908e1458bdae818c03d7b8e6688b025e6',
  '0x7fe978f80ed1830367db86adefe305e58777b602',
  '0xff4944f8809ec48d8acc655ff83770cbd4c3a02a',
  '0x35ffc49e7fefc188dff81db3c717db098294bc23',
  '0x35ffc49e7fefc188dff81db3c717db098294bc23',
  '0xc38899d01dc59a92e38cbe5feec9fadd0eb063b9',
  '0x2ee8670d2b936985d5fb1ee968810c155d3bb9ca',
  '0xaf8c992578bcd951bd9d92e12220eb8bcfbf6539',
  '0xcb0b3fba44676ae1ade8dc211d43ded01f0513fa',
  '0x0f06b02d62f9d6015c6a76c2f0977debb56961bf',
  '0xf116569b3f888d639372a5485685a6d8ee28a593',
  '0xb9f02ea1efe2ec0392c807d357a38ade42126002',
  '0x6b68b7652a32aff234c17796afcea800d54e3428',
  '0xc48b8e56d0cc0334a9a9d532b3da3471455d5b6c',
  '0x53461e4fddcc1385f1256ae24ce3505be664f249',
  '0xc634f7bf06a10b28e3854d7b61b10adbe894a399',
  '0xced29ba48490c51e4348e654c313ac97762beccc',
  '0x703a767fb6a56db0888d6a3e56fedb169b39f3ec',
  '0xb4ec60de5ee53988e98f596655ef0b7110bb8d95',
  '0x0c1e99991dd2f7d374bff13f9f52284ce6cfdae5',
  '0x8cb33d13e9270910ce9475c48aec8acd6c18767b',
  '0x59962c3078852ff7757babf525f90cdffd3fddf0',
  '0xd6fd705ee0b31a9300d3e2154bcce777270cbb6f',
  '0xa0d8dfe910b67696d00d05559666874e7dc0f04b',
  '0xa0d8dfe910b67696d00d05559666874e7dc0f04b',
  '0x138dd537d56f2f2761a6fc0a2a0ace67d55480fe',
  '0x9322c6ccbce9fcc9bdc45fe2830704907330454d',
  '0xbc280becab2bf6ddc0c126e9179d27bb0ebe52a3',
  '0x39de56518e136d472ef9645e7d6e1f7c6c8ed37b',
  '0xdef090607c0628eb1c36be11038e68e0d34d44d5',
  '0xbbc25274b5b8bb6507b3078e38b56d8901fc4102',
  '0xbbc25274b5b8bb6507b3078e38b56d8901fc4102',
  '0x18b8b2d255d7b2331a2bb3b040d701cd113c5ca3',
  '0x8f9be4310f9abb0e5843cc6363908c9b01dfeb3f',
  '0x0a573bc3489d3dc339643ce50767c19eeb3fed70',
  '0xe649edcb64ea6512a95b150da18bfd20c84bc549',
  '0x258d35e155485b0dae6b36a74b7910f3ecdcb16d',
  '0xed9376094ce37635827e0cfddc23bfbb6d788469',
  '0xed9376094ce37635827e0cfddc23bfbb6d788469',
  '0xa204fea2761a0ed5362a931fcad4879bf2ac22f2',
  '0x073aba73177668ba1c6661a4ccddbf77dfc8809a',
  '0xe7c724f87ecff8e2f563962f96b6c291cbd729cf',
  '0x38b8f6af1d55caa0676f1cbb33b344d8122535c2',
  '0xb82b49312f7215d8db146ee73999b001d7b7f2c9',
  '0x1b97f4514572aa954ee05ffaeea82af317de4783',
  '0x02c9ce7204250085bc0e5416c7dbcbc1b255cf59',
  '0x87885aaeeded51c7e3858a782644f5d89759f245',
  '0xbfb496acb99299e9ece84b3fd1b3fdd0f6cddf49',
  '0xd2c69cd5d740bc735eb30188d3b406e2774a1d21',
  '0x0d86a2fd448ad216692238a28d2753def5b1d853',
  '0x0fb773f852d58b0af2723e4efc29500c35e5e710',
  '0xaabd5fbcb8ad62d4fbbb02a2e9769a9f2ee7e883',
  '0xd87ecc6c74f486b044824a222326a96f696fcfa2',
  '0x4a7fd8f063a6eba78f731f562a5a1e9fbb3313bb',
  '0x38b8f6af1d55caa0676f1cbb33b344d8122535c2',
  '0x596a7f60a430d3ea672ebd0268cd414a6607b463',
  '0x84a6a7c0674a3aa03e09c026600cb46181821f07',
  '0x270d2924ca13f54632601647fb225db8eb61fb49',
  '0x5443ab072067e1ad408d7027a236b184472f4122',
  '0x1d8d739912aae17819618e6e33580284c16785a9',
  '0x66b373d71543a71ed9aab0ff9d1ae3bc819302c3',
  '0x81c5e53ac8e5af8966b332742fcd2e06d101bb70',
  '0x4523b791292da89a9194b61ba4cd9d98f2af68e0',
  '0xf740094c0974cafc66a99d397cebb0012551ad33',
  '0xe9b05bc1fa8684ee3e01460aac2e64c678b9da5d',
  '0x38b8f6af1d55caa0676f1cbb33b344d8122535c2',
  '0xb15f67621eb58f12865e327edf0c850bd75a0b57',
  '0xbdfa4f4492dd7b7cf211209c4791af8d52bf5c50',
  '0x870ef2262e4a5e94f6154b9b215c60637c1de908',
  '0xa856e0ca37d3b64a137ad5d3e20c31843fa9fb36',
  '0xf46a1f58cf4dfa84a34b7253c04b4b9fce3b5f73',
  '0x6b92686c40747c85809a6772d0eda8e22a77c60c',
  '0xd3fe68d8b606205eddce2d9a6e5839e82ecb24eb',
  '0xe107a20ce3836329a3c310e9a2da812cfb177f72',
  '0x72b40caa258c237c6f5947e291650808b913e9fc',
  '0xd3fe68d8b606205eddce2d9a6e5839e82ecb24eb',
  '0xc84350bce9259d11f7518564520c9d3d6dde3871',
  '0x7aef2d7671efb00a7196eb4bbd8ee7a2ba0e5de2',
  '0xc84350bce9259d11f7518564520c9d3d6dde3871',
  '0x0ece7c1bfc9543b2cbea8f5577d02e5f59a9f176',
  '0x7c2be77574546b4513b4f30b6b1c5ea1c4ac8efb',
  '0xc9e8212b505f7463b3356855d452cb0fa6e2b481',
  '0x5aae8431e59e6fc777c5e393f6e17129943bcc0c',
  '0x24f5ee0991f95328bf74b682f6fad54cff9c832a',
  '0x720b304e1f7f2ac7d1e60b03289b13a8a764f315',
  '0x24f5ee0991f95328bf74b682f6fad54cff9c832a',
  '0x138dd537d56f2f2761a6fc0a2a0ace67d55480fe',
  '0xd6fd705ee0b31a9300d3e2154bcce777270cbb6f',
  '0xb67620e8c9e19592b616942f895153e2dcf9ccb6',
  '0x4ae958b4de0e6f21d51e73625fb9d5e0c3b0985f',
  '0xb67620e8c9e19592b616942f895153e2dcf9ccb6',
  '0x152b8c153e4f18bfe1cb3f2eaa563813c758e279',
  '0x5595f9e14a9a3b957d08e904939aa351e265c157',
  '0x7b2366996a64effe1af089fa64e9cf4361fddc6e',
  '0x4718fc7e40092a9d5fc584699aea1aa4c6f63d33',
  '0x95eec544a7cf2e6a65a71039d58823f4564a6319',
  '0x465b357bbac5f6f3bc78669db6980f9eaa21d0c2',
  '0x604eb5d4126e3318ec27721bd5059307684f5c89',
  '0xdef090607c0628eb1c36be11038e68e0d34d44d5',
  '0x5456b8caeb4fa3e9795838832f41de0dd96c7912',
  '0x4c46f9a3da4f7f2911e29dae334ebcf09101a669',
  '0xc0dacf029bc8c4753dbfdf9af8408d02bca4e8b3',
  '0x1f7112c065f02c857eca7a8c27e109b1e81dd294',
  '0x26b11a2497381ef5e28bcfcf881185791ba11a5d',
  '0x8cb33d13e9270910ce9475c48aec8acd6c18767b',
  '0xd50f649a2c9fd7ae88c223da80e985d71de45593',
  '0xf7b10d603907658f690da534e9b7dbc4dab3e2d6',
  '0x855c4dca95adb9ce63f09b9899882c50ad9cfc8f',
  '0x8f9be4310f9abb0e5843cc6363908c9b01dfeb3f',
  '0x9322c6ccbce9fcc9bdc45fe2830704907330454d',
  '0x7759d0dbeab2270bea6f35679344d4d67b10cce9',
  '0x0a573bc3489d3dc339643ce50767c19eeb3fed70',
  '0xed5e679d74273ca5c319dac2229f2e87e20903ea',
  '0xe5350e927b904fdb4d2af55c566e269bb3df1941',
  '0x26a22514d3ac0b05e2f4f04df96ef302ba434cbe',
  '0x22866c5c7f2b5475cff41465c53aa813b4c22b13',
  '0xe649edcb64ea6512a95b150da18bfd20c84bc549',
  '0xaebcc707edac413af8782c5bb1a29a6b2d904719',
  '0xee1f07f88934c2811e3dcabdf438d975c3d62cd3',
  '0xee1f07f88934c2811e3dcabdf438d975c3d62cd3',
  '0x48563b586c509faea52e17cc42f83f14b1d3759b',
  '0xf2b8c142edcf2f3cc22665cce863a7c9a3e9f156',
  '0xaad747958f996b22f360fd1d0e3ba56efd477c1f',
  '0x89cff61026f6743b8d25ae9b253582083136b1c4',
  '0x0716266cc5d3c443e30b0c4e9c72afa33778e1de',
  '0xb64caa9388ade265084293e552632d624df1f7c3',
  '0xb64caa9388ade265084293e552632d624df1f7c3',
  '0x7aa1fed31ff356dba66f551c232b5770442b41aa',
  '0x5275817b74021e97c980e95ede6bbac0d0d6f3a2',
  '0xed9376094ce37635827e0cfddc23bfbb6d788469',
  '0x00c67d9d6d3d13b42a87424e145826c467cccd84',
  '0xed9376094ce37635827e0cfddc23bfbb6d788469',
  '0x18d1eb6f4a74ab1d4704ec1688d87047efdb83d5',
  '0xfdbbfb0fe2986672af97eca0e797d76a0bbf35c9',
  '0xd4e84e1a4907190e3f9718adfbd1f00b0b9be7d8',
  '0x6d0bbe84eba47434a0004fc65797b87ef1c913b7',
  '0xb3f09f6d5d1d22579383e56123b7c360f343e255',
  '0x24d734a75166e66000c8d7f12a173e41358e3cc1',
  '0x564b31fe75510a1adb311aece4faa63346ed142c',
  '0xadf094b2b6d2c6f4d8e60f714be005a378b26d36',
  '0x0443180451b462bdc5e09fc910712f10e90d8a62',
  '0x10bf46c783e12b63766dc07a71408b44d8d3621e',
  '0x905defdec5eb4f6cd9d9ec4d4c52fc330ef2026b',
  '0x630cf545b04b6458fadc98654681456009f19478',
  '0x0c1e99991dd2f7d374bff13f9f52284ce6cfdae5',
  '0xc255e0a1be0a4b7b8bf5ebe8d0aba162cf75bae2',
  '0x9b54264d7502f80163ea949038aad771eae67e38',
  '0x577be3ed9a71e1c355f519bbdf5f09ba2018b1cc',
  '0x8b34f5931fd52f70661174486d66a973d50a2d83',
  '0xcba1a275e2d858ecffaf7a87f606f74b719a8a93',
  '0xb5cc3308c8e0f12fccca72e0fa3c8c20518c11e7',
];
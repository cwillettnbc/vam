/**
 * Post Config Data API Component
 */

const PostConfigDataAPI = () => {
  return {
    "env": "QA",
    "resp": "JSON",
    "AB_MAP_CONFIG": [{
      "audienceId": 7150,
      "extmpId": "7qfvKPpaK8",
      "name": "New User: Control",
      "variantId": 7751
    }],
    "FREEWHEEL_CONFIG": {
      "afid": 136164654,
      "csid": "nbc_ctv_vod_appletv",
      "extmp_id": "default",
      "metr": 1031,
      "nw": 169843,
      "prof": {
        "envato": {
          "default": "nbcu_roku_cts_bl"
        },
        "theplatform": {
          "default": "1169843:nbcu_appletv_cts_bl"
        }
      },
      "sfid": 7085683
    }
  };
}

export default PostConfigDataAPI;
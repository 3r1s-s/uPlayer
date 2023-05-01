// Streamilator Extension v1.2.2
// Modified by 3r1s_s
// https://github.com/Streamilator/Streamilator
// https://github.com/3r1s-s/uPlayer
class ScratchifyExtension {
    constructor (runtime, extensionId) {
		this.icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDAuOTY0MiIgaGVpZ2h0PSIxNDAuOTY0MiIgdmlld0JveD0iMCwwLDE0MC45NjQyLDE0MC45NjQyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY5LjUxNzksLTEwOS41MTc5KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTY5LjUxNzksMTgwYzAsLTM4LjkyNjE5IDMxLjU1NTkxLC03MC40ODIxIDcwLjQ4MjEsLTcwLjQ4MjFjMzguOTI2MTksMCA3MC40ODIxLDMxLjU1NTkxIDcwLjQ4MjEsNzAuNDgyMWMwLDM4LjkyNjE5IC0zMS41NTU5MSw3MC40ODIxIC03MC40ODIxLDcwLjQ4MjFjLTM4LjkyNjE5LDAgLTcwLjQ4MjEsLTMxLjU1NTkxIC03MC40ODIxLC03MC40ODIxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTc2LjU3NDEyLDE4MGMwLC0zNS4wMjkxNSAyOC4zOTY3MywtNjMuNDI1ODggNjMuNDI1ODgsLTYzLjQyNTg4YzM1LjAyOTE1LDAgNjMuNDI1ODgsMjguMzk2NzMgNjMuNDI1ODgsNjMuNDI1ODhjMCwzNS4wMjkxNSAtMjguMzk2NzMsNjMuNDI1ODggLTYzLjQyNTg4LDYzLjQyNTg4Yy0zNS4wMjkxNSwwIC02My40MjU4OCwtMjguMzk2NzMgLTYzLjQyNTg4LC02My40MjU4OHoiIGZpbGw9IiM0Y2NlOTMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PGltYWdlIHg9IjQyNC40OTcwMSIgeT0iMzA2LjAwNjAxIiB0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjEyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHa0FBQUI0Q0FZQUFBRHhDTndFQUFBQUFYTlNSMElBcnM0YzZRQUFDRkZKUkVGVWVGN3RuWG5NNXRjVXh6K25xdFdJdGRaWWFoZXhpMmlDeEw1VXl4Q1JVbHNJS1VaRFNoVFJCQ0hTMHRTUzF2S0hyVUpWWTQxVUpVUWFRa1R0MWRoVEZLVlZJclpZdnZJZGQycmVtZmVaNTVrNTk1N25uY205eVNRejh6N25mTy81ZnQrN252UDdQUUVnYVR2d0ZPQnEvN3RUT3dTNENYQkNSRnpXeWVlV2N5UHBlc0NMZ0dPQnF6cDE4SERnU09DMUVYRkJTRG9DdUJRNHFoUEE3bTVPaVlqVEIvbGV1MXRKMjREemdVTUhkT1ppWUp0Rk9neTRDRGg2QUloZG5od1Jadzd5dlhhM2tvNEh6aDNVa1o5N2hFNlJrdXhPa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSkk4aGV4bkpkMHM4aDhmZzFDRDJJbFBRMzRjQTlmbS9pWUl2VWdWdEtKd0x0NitKb2lEV0pSMGxudCs1TkdJTXlSMUlOVlNSOENudDdEMXh4SmcxaWNJZzBpdHFkYlNSOEVudG5UNXk2KzVuVFhnMWhKWHdBZTNzUFhuTzRHc1NqcGg4QmRCcm1mSXlsTHJLUUFmdCsreVRMcmJqUDdLVktXVlVrM0FINEJYRC9yYTRIOUZDbExyQ1JQYzk4QnJwUDFOVVVheEtDazQ0QlBBdGNhQkRGSFVvWllTUmJtTmY1VzVZeWZKYlpUcEF5NTdadXVQd284UHVObmlqU1FQVW4rWHZkdkE3Y2FDRk0ya2s2TmlEY01ER1F0cmlYZHEyMGFSdUtYaVhSV1JMeDRaQ1RyOEMzSmw2cStYQjNaeWtRNk55S2NHRHVvbXFRemdKTUhCMVVtMGhlQjR5TGliNE1ES25NdjZiWXRaWDcwWU5BeWtiN3JmRXRFZkg5d1FHWHVKUjBMZkJvNFpEQm9tVWkvOFZWK1JQaTIrS0Jva2w0UG5Gb1F6QWFSdmdyY2J5RG9LUkZ4K2tEL1phN2JmZDAzZ0RzVmdQNVBKQU5KK2h6d21JR2dGMGJFWXdmNkwzTXR5VHZWdHc2OEN0bzFsZzBpblFNOFkyQ2tWMFRFTFFiNkwzSGRVaE1lUlNObm5ZVWluUTg4ZVdDay93UWVHQkVPOElCdDdVTDFNNFVCYkJoSkx3ZmVQQmo4aklnd3pnSFpKRjBiOExJd0tsVytHUzhiUkhvcThKSEI3UDNGYWVhSStQVmduQ0h1SlQwUitNUVE1NHVkYmhESm00WUxnQjBiaVlIdGxSRngya0QvUTF4THVrTTdGOTE5Q01DS0lqbkQrREhBbDRZam00czJIaEVSbDQ4RTZlMWIwZ2VBWi9YMnU0Sy9EU1BwQ09DZHdMTlhNTXgrNU95STJKNTFVbVV2NmJuQTJjRGhWWmk3NFB4ZkpQK25wT2NEN3lub3lOWEFFeUxpeXdWWUtRaEp0d2UrQmJqZ1pCMXRENUVxOGlNN0EvVU54ekVSOGFkMVJMNEtaaFBvSXVEV3EzeCswR2YyRU9ubXdBK0FHdzhDM04zdE41MTYzb3E3UFVrdUczNDdjTU1pTGhiQjdDSFNvWUFYeUJNS08rWTB4Z3NpNHNlRm1BdWhKSG5VK0htamx3RmVwOWZkTm9yVTFxVjFuQVcrQXB3VUVaNzcxOUlrK1JmMG1GYjVjOStDbzhpcWNXNHFraGZJM3dHSHJlcWwwK2YrRHJ3Sk9DMGkvdEhKNTFJMzdTN09aMFNQbkVjdU5hai93SjRpdGRFMDhxR29aV0ZlMFo0L2ZlL0lKS0drdXdHZU5YelRNdnBzdUN6bXZmMThvVWdQQlQ0MXNMNTVsVTVmQ1Z3Q2VIZjFkZUJuTG95UENCZkhyOXdrM2F3dC9yNHg4Sjk3QXZkdlpWaisyYWpLMDVYN3VPU0RtNHZVUnBOTFo3ZjFRdXJneHlsNDMxYTQwMzlvL243VXB1YS9BdjhHN2d3NEhlSUYzK1Rmc20yZjd3amNwME1mMXVGaXJ5SzV3T0xDTlI3aTFrSElWc1RjcTBoK1N1RDl3UEZic2VkYnJFOWVHanc5KzZVYnZSK0JXU3hTbS9MdUFmakE2VHpLYkpzejRDc3ViOW5WdHUvUDZVelUza1ZxUXJuNDd5MWI2TnpRbVlPVU82K0ZUNHFJenpldVJyeDBZeVdSbkY5eW5tbGtrVXFLcVRVYXZ6b2lmTGJiMFNROUJQaFM1LzRzRjZtQjM3V2RYYXFLTHpySE9jU2RFNWQrRU1HMUd6dEZjbFdyU2UxWk1MbWFTRTBvbDJQNUpVYzNHaEx5Z2VYVXlkRVRJOExyMFRXdDFlTmQycmIrdlNKYVhhUW0xRXVCTTN1aEg2QitYQ20wUFNKK3VYdi9KVGtwK0Zsbm5qdkd0bThpRFZ3Y084WTAxTlU3Z0pkRWhIZHllN1IyRC9oRzRGVWRlN0h2SWpXaFhKL254ejZPNnRpWnJlenFYOERySFBPeUowTWtQYXlWZmZXNm9ONC9rWnBRdnBSMHFhMDdkVEMzM3dJdmRLVlFSUHhuV2FDU25EQTFzYjBPdGZzdlVoUEtoMXdYNGJzMjJ2bVlnNmw1OUhqOWVVVkUvR1RWd05xVWR4bHdtMVZ0bG53dUo5Sk81NUo4cS93Mmx4RjM2dGk2M1h6UGE0L1BQSXZXbjcxMVVKSVB0NC9xRkVRZmtkcW9PckxkODduaTZFQzljYjRZOEd2UjNoY1JmOTVma2lXNU51S2svYlhmemE2ZlNMdU1LdGNJUEs0bDB4NjBoZ3p2dm5ManF4MlhQWHZuZGw1RWVBMUt0Yzd2Wk8wdjBxN1JTWG8wOEx3bTJuVlRrZmMzOXRPSEh3ZmVIUkdlM3JvMVNROXVCLzhlNjlKUHIzbUlyRnNQTjNIVWRqd1BBTng1MzF6NGVtbDB6Zm51UFhHaTBJL2QrSkZRNThrdWlRaHZEcm8zU1RjRlhBWGxMRUsyZlczSEpXN1d5NnIyN1YwOHJ1MjdYY3VpM2h0d1FMN3pjbGJWbWRRZXplVmhWN1ZwekJsZEIvb3I0UEtJK0dNUGdHVStKUGtNNmN6Mi92NGlPTFBzMmVjYzE4MlhpYlFvTUVsKzdZdEY4dG5DRHc3NGRUQStEUHJ2UG5jc3FzRjJJTDQvc3dDZXZ2eDN2M3ZPVThTVis3SjFYa2I2dW4vK1h3OSs4UElpV2hNa0FBQUFBRWxGVGtTdVFtQ0MiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo3MC40ODIwOTYzODAzMDI2Njo3MC40ODIwOTc3Nzg5ODE2MS0tPg==';
    	this.menuicon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDAuOTY0MiIgaGVpZ2h0PSIxNDAuOTY0MiIgdmlld0JveD0iMCwwLDE0MC45NjQyLDE0MC45NjQyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY5LjUxNzksLTEwOS41MTc5KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTY5LjUxNzksMTgwYzAsLTM4LjkyNjE5IDMxLjU1NTkxLC03MC40ODIxIDcwLjQ4MjEsLTcwLjQ4MjFjMzguOTI2MTksMCA3MC40ODIxLDMxLjU1NTkxIDcwLjQ4MjEsNzAuNDgyMWMwLDM4LjkyNjE5IC0zMS41NTU5MSw3MC40ODIxIC03MC40ODIxLDcwLjQ4MjFjLTM4LjkyNjE5LDAgLTcwLjQ4MjEsLTMxLjU1NTkxIC03MC40ODIxLC03MC40ODIxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTc2LjU3NDEyLDE4MGMwLC0zNS4wMjkxNSAyOC4zOTY3MywtNjMuNDI1ODggNjMuNDI1ODgsLTYzLjQyNTg4YzM1LjAyOTE1LDAgNjMuNDI1ODgsMjguMzk2NzMgNjMuNDI1ODgsNjMuNDI1ODhjMCwzNS4wMjkxNSAtMjguMzk2NzMsNjMuNDI1ODggLTYzLjQyNTg4LDYzLjQyNTg4Yy0zNS4wMjkxNSwwIC02My40MjU4OCwtMjguMzk2NzMgLTYzLjQyNTg4LC02My40MjU4OHoiIGZpbGw9IiM0Y2NlOTMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PGltYWdlIHg9IjQyNC40OTcwMSIgeT0iMzA2LjAwNjAxIiB0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjEyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHa0FBQUI0Q0FZQUFBRHhDTndFQUFBQUFYTlNSMElBcnM0YzZRQUFDRkZKUkVGVWVGN3RuWG5NNXRjVXh6K25xdFdJdGRaWWFoZXhpMmlDeEw1VXl4Q1JVbHNJS1VaRFNoVFJCQ0hTMHRTUzF2S0hyVUpWWTQxVUpVUWFRa1R0MWRoVEZLVlZJclpZdnZJZGQycmVtZmVaNTVrNTk1N25uY205eVNRejh6N25mTy81ZnQrN252UDdQUUVnYVR2d0ZPQnEvN3RUT3dTNENYQkNSRnpXeWVlV2N5UHBlc0NMZ0dPQnF6cDE4SERnU09DMUVYRkJTRG9DdUJRNHFoUEE3bTVPaVlqVEIvbGV1MXRKMjREemdVTUhkT1ppWUp0Rk9neTRDRGg2QUloZG5od1Jadzd5dlhhM2tvNEh6aDNVa1o5N2hFNlJrdXhPa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSk1rWklFVnBoUGtTcFlUbUpNa1pJRVZwaFBrU3BZVG1KTWtaSUVWcGhQa1NwWVRtSkk4aGV4bkpkMHM4aDhmZzFDRDJJbFBRMzRjQTlmbS9pWUl2VWdWdEtKd0x0NitKb2lEV0pSMGxudCs1TkdJTXlSMUlOVlNSOENudDdEMXh4SmcxaWNJZzBpdHFkYlNSOEVudG5UNXk2KzVuVFhnMWhKWHdBZTNzUFhuTzRHc1NqcGg4QmRCcm1mSXlsTHJLUUFmdCsreVRMcmJqUDdLVktXVlVrM0FINEJYRC9yYTRIOUZDbExyQ1JQYzk4QnJwUDFOVVVheEtDazQ0QlBBdGNhQkRGSFVvWllTUmJtTmY1VzVZeWZKYlpUcEF5NTdadXVQd284UHVObmlqU1FQVW4rWHZkdkE3Y2FDRk0ya2s2TmlEY01ER1F0cmlYZHEyMGFSdUtYaVhSV1JMeDRaQ1RyOEMzSmw2cStYQjNaeWtRNk55S2NHRHVvbXFRemdKTUhCMVVtMGhlQjR5TGliNE1ES25NdjZiWXRaWDcwWU5BeWtiN3JmRXRFZkg5d1FHWHVKUjBMZkJvNFpEQm9tVWkvOFZWK1JQaTIrS0Jva2w0UG5Gb1F6QWFSdmdyY2J5RG9LUkZ4K2tEL1phN2JmZDAzZ0RzVmdQNVBKQU5KK2h6d21JR2dGMGJFWXdmNkwzTXR5VHZWdHc2OEN0bzFsZzBpblFNOFkyQ2tWMFRFTFFiNkwzSGRVaE1lUlNObm5ZVWluUTg4ZVdDay93UWVHQkVPOElCdDdVTDFNNFVCYkJoSkx3ZmVQQmo4aklnd3pnSFpKRjBiOExJd0tsVytHUzhiUkhvcThKSEI3UDNGYWVhSStQVmduQ0h1SlQwUitNUVE1NHVkYmhESm00WUxnQjBiaVlIdGxSRngya0QvUTF4THVrTTdGOTE5Q01DS0lqbkQrREhBbDRZam00czJIaEVSbDQ4RTZlMWIwZ2VBWi9YMnU0Sy9EU1BwQ09DZHdMTlhNTXgrNU95STJKNTFVbVV2NmJuQTJjRGhWWmk3NFB4ZkpQK25wT2NEN3lub3lOWEFFeUxpeXdWWUtRaEp0d2UrQmJqZ1pCMXRENUVxOGlNN0EvVU54ekVSOGFkMVJMNEtaaFBvSXVEV3EzeCswR2YyRU9ubXdBK0FHdzhDM04zdE41MTYzb3E3UFVrdUczNDdjTU1pTGhiQjdDSFNvWUFYeUJNS08rWTB4Z3NpNHNlRm1BdWhKSG5VK0htamx3RmVwOWZkTm9yVTFxVjFuQVcrQXB3VUVaNzcxOUlrK1JmMG1GYjVjOStDbzhpcWNXNHFraGZJM3dHSHJlcWwwK2YrRHJ3Sk9DMGkvdEhKNTFJMzdTN09aMFNQbkVjdU5hai93SjRpdGRFMDhxR29aV0ZlMFo0L2ZlL0lKS0drdXdHZU5YelRNdnBzdUN6bXZmMThvVWdQQlQ0MXNMNTVsVTVmQ1Z3Q2VIZjFkZUJuTG95UENCZkhyOXdrM2F3dC9yNHg4Sjk3QXZkdlpWaisyYWpLMDVYN3VPU0RtNHZVUnBOTFo3ZjFRdXJneHlsNDMxYTQwMzlvL243VXB1YS9BdjhHN2d3NEhlSUYzK1Rmc20yZjd3amNwME1mMXVGaXJ5SzV3T0xDTlI3aTFrSElWc1RjcTBoK1N1RDl3UEZic2VkYnJFOWVHanc5KzZVYnZSK0JXU3hTbS9MdUFmakE2VHpLYkpzejRDc3ViOW5WdHUvUDZVelUza1ZxUXJuNDd5MWI2TnpRbVlPVU82K0ZUNHFJenpldVJyeDBZeVdSbkY5eW5tbGtrVXFLcVRVYXZ6b2lmTGJiMFNROUJQaFM1LzRzRjZtQjM3V2RYYXFLTHpySE9jU2RFNWQrRU1HMUd6dEZjbFdyU2UxWk1MbWFTRTBvbDJQNUpVYzNHaEx5Z2VYVXlkRVRJOExyMFRXdDFlTmQycmIrdlNKYVhhUW0xRXVCTTN1aEg2QitYQ20wUFNKK3VYdi9KVGtwK0Zsbm5qdkd0bThpRFZ3Y084WTAxTlU3Z0pkRWhIZHllN1IyRC9oRzRGVWRlN0h2SWpXaFhKL254ejZPNnRpWnJlenFYOERySFBPeUowTWtQYXlWZmZXNm9ONC9rWnBRdnBSMHFhMDdkVEMzM3dJdmRLVlFSUHhuV2FDU25EQTFzYjBPdGZzdlVoUEtoMXdYNGJzMjJ2bVlnNmw1OUhqOWVVVkUvR1RWd05xVWR4bHdtMVZ0bG53dUo5Sk81NUo4cS93Mmx4RjM2dGk2M1h6UGE0L1BQSXZXbjcxMVVKSVB0NC9xRkVRZmtkcW9PckxkODduaTZFQzljYjRZOEd2UjNoY1JmOTVma2lXNU51S2svYlhmemE2ZlNMdU1LdGNJUEs0bDB4NjBoZ3p2dm5ManF4MlhQWHZuZGw1RWVBMUt0Yzd2Wk8wdjBxN1JTWG8wOEx3bTJuVlRrZmMzOXRPSEh3ZmVIUkdlM3JvMVNROXVCLzhlNjlKUHIzbUlyRnNQTjNIVWRqd1BBTng1MzF6NGVtbDB6Zm51UFhHaTBJL2QrSkZRNThrdWlRaHZEcm8zU1RjRlhBWGxMRUsyZlczSEpXN1d5NnIyN1YwOHJ1MjdYY3VpM2h0d1FMN3pjbGJWbWRRZXplVmhWN1ZwekJsZEIvb3I0UEtJK0dNUGdHVStKUGtNNmN6Mi92NGlPTFBzMmVjYzE4MlhpYlFvTUVsKzdZdEY4dG5DRHc3NGRUQStEUHJ2UG5jc3FzRjJJTDQvc3dDZXZ2eDN2M3ZPVThTVis3SjFYa2I2dW4vK1h3OSs4UElpV2hNa0FBQUFBRWxGVGtTdVFtQ0MiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo3MC40ODIwOTYzODAzMDI2Njo3MC40ODIwOTc3Nzg5ODE2MS0tPg==';
		this.runtime = runtime;
		this.end_hat = 0;
		this.audio_player = new Audio();
		this.set_volume = 1;
		this.version_number = '1.2.2';
    }

    getInfo () {
        return {
            "id": 'uPlayer',
            "name": 'uPlayer',
			"blockIconURI": this.icon,
			"menuIconURI": this.menuicon,
            color1: '#4cce93',
            color2: '#399b6e',
            color3: '#266749',
            "blocks": [
					{
                	"opcode": 'playAudioFromURL',
                    "blockType": "command",
                    "text": 'play audio [URL]',
					"arguments": {
						"URL": {
							"type": "string",
							"defaultValue": 'https://github.com/3r1s-s/uPlayer/blob/main/songs/Summit.mp3',
						},
					},
                },
					{
                	"opcode": 'stopAudio',
                    "blockType": "command",
                    "text": 'stop audio',
                },
					{
                	"opcode": 'pauseAudio',
                    "blockType": "command",
                    "text": 'pause',
                },
					{
                	"opcode": 'resumeAudio',
                    "blockType": "command",
                    "text": 'resume',
                },
					{
					"opcode": 'goToLocation',
                    "blockType": "command",
                    "text": 'go to location [LOCATION]',
					"arguments": {
						"LOCATION": {
							"type": "number",
							"defaultValue": '0',
						},
					},
                },
					{
					"opcode": 'setAudioVolume',
                    "blockType": "command",
                    "text": 'set volume [VOLUME]',
					"arguments": {
						"VOLUME": {
							"type": "number",
							"defaultValue": '100',
						},
					},
                },
					{
					"opcode": 'setPlaybackSpeed',
					"blockType": "command",
					"text": 'set playback speed [SPEED]',
					"arguments": {
						"SPEED": {
							"type": "number",
							"defaultValue": '1',
						},
					},
				},
				{
                	"opcode": 'enableLoop',
                    "blockType": "command",
                    "text": 'turn loop on',
                },
		    		{
                	"opcode": 'disableLoop',
                    "blockType": "command",
                    "text": 'turn loop off',
                },
		    		{
                	"opcode": 'audioLocation',
                    "blockType": "reporter",
                    "text": 'audio location',
                },
		    		{
                	"opcode": 'audioDuration',
                    "blockType": "reporter",
                    "text": 'audio duration',
                },
		    		{
                	"opcode": 'audioVolume',
                    "blockType": "reporter",
                    "text": 'audio volume',
                },
					{
					"opcode": 'audioSpeed',
					"blockType": "reporter",
					"text": 'audio speed',
				},
					{
					"opcode": 'audioSource',
					"blockType": "reporter",
					"text": 'audio url',
				},
		    		{
                	"opcode": 'audioPaused',
                    "blockType": "Boolean",
                    "text": 'audio paused?',
                },
		    		{
                	"opcode": 'audioEnded',
                    "blockType": "Boolean",
                    "text": 'audio ended?',
                },
		    		{
                	"opcode": 'loopEnabled',
                    "blockType": "Boolean",
                    "text": 'loop enabled?',
                },
					{
                	"opcode": 'whenAudioEnds',
                    "blockType": "hat",
                    "text": 'when audio ends',
                },
					{
                	"opcode": 'versionNumber',
                    "blockType": "reporter",
                    "text": 'extension version',
                },
			]
        };
    };

	playAudioFromURL({URL}) {
		this.audio_player = new Audio(URL);
		this.audio_player.play();
		this.audio_player.volume = this.set_volume
		this.end_hat = 1;
	};

	stopAudio({}) {
		this.audio_player.pause();
		this.audio_player.currentTime = 0;
	};

	pauseAudio({}) {
		this.audio_player.pause();
	};

	resumeAudio({}) {
		this.audio_player.play();
	};

	goToLocation({LOCATION}) {
		this.audio_player.currentTime = LOCATION;
	};

	setAudioVolume({VOLUME}) {
		if (VOLUME >= 0 && VOLUME <= 100) {
 			this.audio_player.volume = VOLUME / 100;
			this.set_volume = VOLUME / 100;
		};
	};

	setPlaybackSpeed({SPEED}) {
		this.audio_player.playbackRate = SPEED;
	}

	enableLoop({}) {
		this.audio_player.loop = true;
	};
	
	disableLoop({}) {
		this.audio_player.loop = false;
	};

	audioLocation({}) {
		return this.audio_player.currentTime;
	};

	audioDuration({}) {
		return this.audio_player.duration;
	};

	audioVolume({}) {
		return this.audio_player.volume * 100;
	};

	audioSpeed({}) {
		return this.audio_player.playbackRate;
	};

	audioSource({}) {
		return this.audio_player.src;
	};

	audioPaused({}) {
		return this.audio_player.paused;
	};

	audioEnded({}) {
		return this.audio_player.ended;
	};

	loopEnabled({}) {
		return this.audio_player.loop;
	};

	whenAudioEnds() {
		if (this.end_hat == 1 && this.audio_player.ended) {
			this.end_hat = 0;
			return true;
		} else {
			return false;
		};
	};

	versionNumber({}) {
		return this.version_number;
	};
};

(function() {
    var extensionClass = ScratchifyExtension;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
		console.log("Sandboxed mode detected, performance will suffer because of the extension being sandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()
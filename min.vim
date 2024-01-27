set rtp+=~/.cache/dein/nvim/repos/github.com/vim-denops/denops.vim

" ddu
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu.vim
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu-ui-ff
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu-source-file
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu-column-filename
set rtp+=~/.cache/dein/nvim/repos/github.com/kamecha/ddu-filter-converter_file_git_status

set rtp+=~/workspace/Plugin/ddu-column-test

filetype plugin indent on

" setting for ddu
let s:ddu_setting_json =<< trim END
{
	"ui": "ff",
	"sources": [
		"file"
	],
	"sourceOptions": {
		"_": {
			"columns": [
				"filename",
				{
					"name": "param",
					"params": {
						"text": "unko",
						"highlights": [
							{
								"name": "ddu-column-param",
								"hl_group": "ErrorMsg",
								"width": 1
							}
						]
					}
				}
			]
		}
	}
}
END

call ddu#custom#patch_global(s:ddu_setting_json->join('')->json_decode())

nnoremap <silent> <Leader>d <Cmd>call ddu#start()<CR>

" filetype(ddu-ff) setting

autocmd FileType ddu-ff call s:ddu_ff_setting()

function s:ddu_ff_setting()
	nnoremap <buffer><silent> q
				\	<Cmd>call ddu#ui#do_action('quit')<CR>
	nnoremap <buffer><silent> e
				\	<Cmd>call ddu#ui#do_action('expandItem', #{ mode: "toggle" })<CR>
endfunction

set rtp+=~/.cache/dein/nvim/repos/github.com/vim-denops/denops.vim

" ddu
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu.vim
set rtp+=~/.cache/dein/nvim/repos/github.com/Shougo/ddu-ui-ff

set rtp+=~/workspace/Plugin/ddu-column-test

filetype plugin indent on

" setting for ddu
let s:ddu_setting_json =<< trim END
{
	"ui": "ff",
	"sources": ["otameshi"],
	"sourceOptions": {
		"_": {
			"columns": ["icon", "icon"]
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
				\	<Cmd>call ddu#ui#ff#do_action('expandItem', #{ mode: "toggle" })<CR>
endfunction
